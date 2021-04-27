import {
    animationFrameScheduler,
    asapScheduler,
    asyncScheduler,
    AsyncSubject,
    BehaviorSubject,
    interval, of, queueScheduler,
    Subject,
    timer
} from 'rxjs';
import {multicast, observeOn, refCount, share, tap} from "rxjs/operators";

const observer ={
    next: val=> console.log('next',val),
    error: err=> console.log('error',err),
    complete: ()=> console.log('complete'),
}

// const sub = asyncScheduler.schedule(console.log,200,"Hello World!");
//
// console.log('sync');
//
// sub.unsubscribe();
of(4,5,6).pipe(
    tap(val=>console.log('from tap',val)),
    observeOn(asyncScheduler,2000)
).subscribe(observer);
// of(1,2,3).subscribe(observer);
// console.log('sync')