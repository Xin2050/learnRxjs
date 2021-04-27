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

queueScheduler.schedule(() => {
    queueScheduler.schedule(() => {
        console.log('inside second queue');
        queueScheduler.schedule(() => {
            console.log('inside third queue');
        });
    });
    console.log('inside first queue');
})