import {of, fromEvent, interval, merge, EMPTY} from 'rxjs';
import {map, mapTo, pluck, filter, takeUntil, scan, takeWhile, tap, switchMap, startWith} from 'rxjs/operators';


// const keyup$ = fromEvent(document,'keyup');
// const click$ = fromEvent(document,'click');
//
// merge(
//     keyup$,
//     click$,
// ).subscribe(console.log);


const counter$ = interval(1000);
const pauseButton = document.getElementById("pause");
const startButton = document.getElementById("start");
const pauseClick$ = fromEvent(pauseButton, 'click');
const startClick$ = fromEvent(startButton, 'click');

const COUNTDOWN_FROM = 10;

merge(
    startClick$.pipe(mapTo(true)),
    pauseClick$.pipe(mapTo(false))
).pipe(
    switchMap(shouldStart => {
        return shouldStart ? counter$ :EMPTY
    }),
    mapTo(-1),
    scan((accumulator, current) => {
        return accumulator + current;
    }, COUNTDOWN_FROM),

    takeWhile(value => value >= 0),
    startWith(COUNTDOWN_FROM),
).subscribe({
    next: value => {
        document.getElementById("countdown").innerHTML = value;
    },
    complete: () => {
        document.getElementById("message").innerHTML = "complete";
    }
})
