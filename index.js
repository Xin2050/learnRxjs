import {of, fromEvent, timer} from 'rxjs';
import {ajax} from 'rxjs/ajax';
import {map, mapTo, pluck, filter, takeUntil, mergeMapTo, exhaustMap, finalize, switchMapTo, tap} from 'rxjs/operators';


const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const pollingStatus = document.getElementById('polling-status');
const dogImage = document.getElementById("dog");

const startClick$ = fromEvent(startButton,'click');
const stopClick$ = fromEvent(stopButton,'click');

startClick$.pipe(
    exhaustMap(()=>timer(0,5000).pipe(
        tap(()=>pollingStatus.innerHTML = 'Active'),
        switchMapTo(ajax.getJSON('https://random.dog/woof.json').pipe(
            pluck('url')
        )),
        takeUntil(stopClick$),
        finalize(()=>pollingStatus.innerHTML = "Stopped")
    )),
).subscribe(url=>dogImage.src= url);



