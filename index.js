import {of,fromEvent,asyncScheduler} from 'rxjs';
import {map, mapTo, pluck, filter, throttleTime, tap, sampleTime} from 'rxjs/operators';

const click$ = fromEvent(document,'click');

click$.pipe(
    sampleTime(2000), //每2秒把之前间隙里的事件发送出来
    map(({clientX,clientY})=>({clientX,clientY})),

).subscribe(console.log)

