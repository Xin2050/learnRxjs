import {of, fromEvent, Subject, interval} from 'rxjs';
import {map, mapTo, pluck, filter, tap} from 'rxjs/operators';

const observer = {
    next: val => console.log('next', val),
    error: err => console.log('error', err),
    complete: () => console.log('complete')
};



const subject$ = new Subject();

const subscription$ = subject$.subscribe(observer);



const subscription$2 = subject$.subscribe(observer);



const interval$ = interval(2000).pipe(
    tap(val=>console.log("new interval",val)),
)


interval$.subscribe(subject$);

