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
    debounce, switchMap, concatMap,exhaustMap, take, delay,
} from 'rxjs/operators';
import {ajax} from "rxjs/ajax";

const login$ = fromEvent(document.getElementById("login"),'click');

const authenticateUser = ()=>{
    return ajax.post(
        'https://reqres.in/api/login',
        {
            email:"eve.holt@reqres.in",
            password:'cityslicka'
        }
    )
}

login$.pipe(
    exhaustMap(()=>authenticateUser()),
).subscribe(console.log)
// const saveAnswer = answer => {
//     return of(`Saved ${answer}`).pipe(
//         delay(1500)
//     );
// }
// const radioButtons = document.querySelectorAll('.radio-option');
//
// const answerChange$ = fromEvent(radioButtons,'click');
// answerChange$.pipe(
//     exhaustMap(event=>saveAnswer(event.target.value)),
// ).subscribe(console.log);

