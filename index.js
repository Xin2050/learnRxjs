import {of,fromEvent,interval,from} from 'rxjs';
import {
    map,
    mapTo,
    pluck,
    filter,
    takeUntil,
    scan,
    takeWhile,
    tap,
    distinctUntilChanged,
    distinctUntilKeyChanged
} from 'rxjs/operators';



const numbers = [1,2,3,4,5];

const users = [
    {name:'Brian',logged:false,token:null},
    {name:'Brian',logged:false,token:null},
    {name:'Xax',logged:true,token:"asdfsdlfksjdflkj"},
    {name:'Leon',logged:true,token:"asdfsdlfksjdflkj"},
]

const state$ = from(users).pipe(
    scan((accumulator,currentValue)=>{
        return {...accumulator,...currentValue}
    },{})

);

const name$ = state$.pipe(
    distinctUntilKeyChanged('name'),
    map(state=>state.name),
);

name$.subscribe(console.log);