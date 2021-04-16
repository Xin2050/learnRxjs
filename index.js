import {of,fromEvent,interval} from 'rxjs';
import {map, mapTo, pluck, filter, takeUntil, scan, takeWhile, tap} from 'rxjs/operators';


const counter$ = interval(1000);
const abortButton = document.getElementById("abort");
const abortClick$ = fromEvent(abortButton,'click');

counter$.pipe(
    mapTo(-1),
    scan((accumulator,current)=>{
        return accumulator+current;
    },100),
    takeUntil(abortClick$),
    takeWhile(value=>value>=0),
    //tap(console.log),
).subscribe({
    next:value=>{
        document.getElementById("countdown").innerHTML = value;
    },
    complete:()=>{
        document.getElementById("message").innerHTML = "complete";
    }
})
