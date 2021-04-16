import {of, fromEvent, asyncScheduler, interval} from 'rxjs';
import {map, mapTo, pluck, filter, throttleTime, tap, sampleTime, sample,auditTime,audit} from 'rxjs/operators';

// function calculateScrollPercent(element) {
//
//     const {scrollTop,scrollHeight,clientHeight} = element;
//     return (scrollTop/(scrollHeight-clientHeight)) *100
// }
//
// const progressBar = document.querySelector('.progress-bar');
//
// const scroll$ = fromEvent(document,'scroll');
// const progress$ = scroll$.pipe(
//     map(({target})=>calculateScrollPercent(target.scrollingElement)),
//     tap(console.log),
//     throttleTime(30,asyncScheduler,{
//         leading:false,
//         trailing:true
//     }),
// )
//
// progress$.subscribe(percent=>{
//     progressBar.style.width = `${percent}%`;
// });
//

const click$ = fromEvent(document,'click');

click$.pipe(
    auditTime(3000),
).subscribe(console.log)