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
import {takeWhile} from "rxjs/src/internal/operators/takeWhile";

const observer ={
    next: val=> console.log('next',val),
    error: err=> console.log('error',err),
    complete: ()=> console.log('complete'),
}
console.log("ok");
const ball = document.getElementById('ball');
// animationFrameScheduler.schedule(function(position){
//   ball.style.transform = `translate3d(0, ${position}px, 0`;
//   if(position <= 200) {
//     this.schedule(position + 1)
//   }
// }, 0, 0);

interval(0,animationFrameScheduler).pipe(
    takeWhile(val=>val<=200),
).subscribe(val=>{
    ball.style.transform = `translate3d(0, ${val}px, 0`;
})