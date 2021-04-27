import {
    animationFrameScheduler,
    asapScheduler,
    asyncScheduler,
    AsyncSubject,
    BehaviorSubject,
    interval, queueScheduler,
    Subject,
    timer
} from 'rxjs';
import {multicast, refCount, share, tap} from "rxjs/operators";

const observer ={
    next: val=> console.log('next',val),
    error: err=> console.log('error',err),
    complete: ()=> console.log('complete'),
}

asyncScheduler.schedule(()=>console.log("async"));
setTimeout(() => {console.log("setTimeout")});

asapScheduler.schedule(()=>console.log("microtask asap"))
queueMicrotask(()=>{console.log("microtask")});

animationFrameScheduler.schedule(()=>console.log("animationFrameSched"))
requestAnimationFrame(()=>{console.log('animationFrame')});

queueScheduler.schedule(()=>{
    //schedule additional task
})

console.log('first');
console.log("second");