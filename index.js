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

asyncScheduler.schedule(console.log,0,"AsyncScheduler");  //3
asapScheduler.schedule(console.log,0,"AsapScheduler"); //1
Promise.resolve('from promise').then(console.log) //2

console.log("synchronous console.log")