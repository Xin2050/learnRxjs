import {of,fromEvent,interval} from 'rxjs';
import {map, mapTo, pluck, filter, takeUntil, scan, takeWhile, tap, startWith,endWith,concatAll} from 'rxjs/operators';


// const numbers$ = of(1,2,3);
//
// numbers$.pipe(
//     startWith('a','b','c'),
//     endWith('d','e','f'),
// ).subscribe(console.log)


const counter$ = interval(1000);
const abortButton = document.getElementById("abort");
const abortClick$ = fromEvent(abortButton,'click');

const COUNTDOWN_FROM = 10;
counter$.pipe(
    mapTo(-1),
    scan((accumulator,current)=>{
        return accumulator+current;
    },COUNTDOWN_FROM),
    takeUntil(abortClick$),
    takeWhile(value=>value>=0),
    startWith(COUNTDOWN_FROM),
    //tap(console.log),
).subscribe({
    next:value=>{
        document.getElementById("countdown").innerHTML = value;
    },
    complete:()=>{
        document.getElementById("message").innerHTML = "complete";
    }
})
