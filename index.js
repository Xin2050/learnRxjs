import {of,fromEvent,interval,from} from 'rxjs';
import {ajax} from 'rxjs/ajax'
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
    debounce, mergeAll, mergeMap,
} from 'rxjs/operators';

const inputBox = document.getElementById('text-input');

const input$ = fromEvent(inputBox,'keyup');

input$.pipe(
    debounceTime(1000),
    mergeMap(event=>{
        const term = event.target.value;
        return ajax.getJSON(
            `https://api.github.com/users/${term}`
        )
    }),

).subscribe(console.log)