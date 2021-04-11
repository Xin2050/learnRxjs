import { fromEvent } from 'rxjs';

const observer = {
    next:val=>console.log('next',val),
    error:error=>console.log('error',error),
    complete:()=>console.log('complete'),
}


const source$ = fromEvent(document,'keyup');

const subOne = source$.subscribe(observer);
const subTwo = source$.subscribe(observer);

setTimeout(()=>{
    console.log('unSubscribe');
    subOne.unsubscribe();
},3000)

