import {of,fromEvent, from , interval} from 'rxjs';
import {map, mapTo, pluck, filter, reduce, take, scan} from 'rxjs/operators';

const numbers = [1,2,3,4,5];

const users = [
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
    map(state=>state.name)
);

name$.subscribe(console.log);


