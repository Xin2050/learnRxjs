import {of, fromEvent, interval, merge, combineLatest, EMPTY, forkJoin} from 'rxjs';
import {
    map,
    mapTo,
    pluck,
    filter,
    takeUntil,
    scan,
    takeWhile,
    tap,
    switchMap,
    startWith, withLatestFrom, delay,

} from 'rxjs/operators';
import {ajax} from "rxjs/ajax";

const number$ = of(1,2,3);
const letters$ = of('a','b','c');

forkJoin(
    {
        numbers:number$,
        letters:letters$.pipe(
            delay(3000)
        ),
    },
).subscribe(console.log)

const GITHUB_API_BASE = 'https://api.github.com';

forkJoin(
    {
        user:ajax.getJSON(`${GITHUB_API_BASE}/users/reactivex`),
        repo:ajax.getJSON(`${GITHUB_API_BASE}/users/reactivex/repos`)
    }
).subscribe(console.log)