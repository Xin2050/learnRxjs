import {of,fromEvent,interval,from} from 'rxjs';
import {
    map,
    mapTo,
    pluck,
    filter,
    takeUntil,
    scan,
    takeWhile,
    tap,
    distinctUntilChanged,
    distinctUntilKeyChanged,
    debounceTime,
    debounce, switchMap, concatMap, take, delay,
} from 'rxjs/operators';
import {ajax} from "rxjs/ajax";

// const clicks$ = fromEvent(document,'click');
// const interval$ = interval(1000);
//
// clicks$.pipe(
//     concatMap(()=>interval$.pipe(take(3))),
//
// ).subscribe(console.log)
const saveAnswer = answer => {
    return of(`Saved ${answer}`).pipe(
        delay(1500)
    );
}
const radioButtons = document.querySelectorAll('.radio-option');

const answerChange$ = fromEvent(radioButtons,'click');
answerChange$.pipe(
    concatMap(event=>saveAnswer(event.target.value)),
).subscribe(console.log);

