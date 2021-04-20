import {of, fromEvent, interval, EMPTY, empty} from 'rxjs';
import {map, mapTo, pluck, filter,concat, scan, tap, take, first, takeWhile, delay, startWith} from 'rxjs/operators';

const interval$ = interval(1000);
const delayed$ = EMPTY.pipe(delay(1000))


delayed$.pipe(
    concat(
        delayed$.pipe(startWith("3...")),
        delayed$.pipe(startWith("2...")),
        delayed$.pipe(startWith("1...")),
        delayed$.pipe(startWith("Go!")),
    ),
    startWith("Get Ready!"),
).subscribe(console.log)
