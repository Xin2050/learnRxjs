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
    debounce, mergeAll, mergeMap, switchMap,
} from 'rxjs/operators';

// const inputBox = document.getElementById('text-input');
//
// const input$ = fromEvent(inputBox,'keyup');
//
// input$.pipe(
//     debounceTime(1000),
//     mergeMap(event=>{
//         const term = event.target.value;
//         return ajax.getJSON(
//             `https://api.github.com/users/${term}`
//         )
//     }),
//
// ).subscribe(console.log)
// //use case 1

// const clicks$ = fromEvent(document,'click');
// const mouseDown$ = fromEvent(document,'mousedown');
// const mouseUp$ = fromEvent(document,'mouseup');
// const interval$ = interval(1000);
//
// mouseDown$.pipe(
//     mergeMap(()=>interval$.pipe(
//         takeUntil(mouseUp$)
//     ))
// ).subscribe(console.log)

// const click$ = fromEvent(document,'click');
//
// const coordinates$ = click$.pipe(
//     map(event=>({
//         x:event.clientX,
//         y:event.clientY
//     }))
// );
//
// const coordinatesWithSave$ = coordinates$.pipe(
//     mergeMap(coords=>ajax.post(
//         'https://www.mocky.io/v2/5185415ba171ea3a00704eed',
//         coords
//     ))
// )
//
// coordinatesWithSave$.subscribe(console.log);

const clicks$ = fromEvent(document,'click');
const interval$ = interval(1000);

clicks$.pipe(
    switchMap(()=>interval$)
).subscribe(console.log)
