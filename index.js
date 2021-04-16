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
    distinctUntilKeyChanged, debounceTime
} from 'rxjs/operators';



const click$ = fromEvent(document,'click');

click$.pipe(
    debounceTime(1000)
).subscribe(console.log)//

//input
const inputBox = document.getElementById('text-input');
const input$ = fromEvent(inputBox,'keyup');
input$.pipe(
    debounceTime(1000),
    pluck('target','value'),
    distinctUntilChanged(),
).subscribe(console.log)