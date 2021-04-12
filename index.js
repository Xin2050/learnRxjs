import {from} from 'rxjs';

function* hello() {
    yield "hello";
    yield "wold!";
}

const iterator = hello();


const observer = {
    next:val=>console.log('next',val),
    error:error=>console.log('error',error),
    complete:()=>console.log('complete'),
}

const source$ = from(iterator);

const subOne = source$.subscribe(observer);

subOne.unsubscribe();



