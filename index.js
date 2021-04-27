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

asyncScheduler.schedule(console.log,200,'async');
setTimeout(() => {console.log("setTimeout")});

asapScheduler.schedule(console.log,null,'microtask from p')
queueMicrotask(()=>{console.log("microtask")});

animationFrameScheduler.schedule(console.log, null, 'aframe from sch');
requestAnimationFrame(()=>{console.log('animationFrame')});

queueScheduler.schedule(()=>{
    //schedule additional task
})

console.log('first');
console.log("second");