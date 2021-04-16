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
    debounce,
} from 'rxjs/operators';

const inputBox = document.getElementById('text-input');

const input$ = fromEvent(inputBox,'keyup');

input$.pipe(
    debounce((value)=>{
        console.log(value);
        return interval(1000)
    }),
    pluck('target','value'),
    distinctUntilChanged(),
).subscribe(console.log)