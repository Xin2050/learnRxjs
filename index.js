import {BehaviorSubject, fromEvent, interval, ReplaySubject, Subject, timer} from 'rxjs';
import {mergeMapTo, multicast, refCount, share, shareReplay, tap} from "rxjs/operators";
import {ajax} from "rxjs/ajax";

const observer ={
    next: val=> console.log('next',val),
    error: err=> console.log('error',err),
    complete: ()=> console.log('complete'),
}

const ajax$ = ajax(
    'https://api.github.com/users/octocat'
);

const click$ = fromEvent(document,'click');

const clickRequest$ = click$.pipe(
    mergeMapTo(ajax$),
    shareReplay(2,2000)

);

clickRequest$.subscribe(observer);

setTimeout(()=> {
    clickRequest$.subscribe(observer);
},5000)

