import {of,fromEvent,interval} from 'rxjs';
import {map, mapTo, pluck,filter,scan,tap,take,first,takeWhile} from 'rxjs/operators';

const counter$ = interval(1000);

counter$.pipe(
    mapTo(-1),
    scan((accumulator,current)=>{
        return accumulator+current;
    },5),
    takeWhile(value=>value>=0),
    tap(console.log),
).subscribe(console.log)