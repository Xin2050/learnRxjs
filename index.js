import {of, Observable} from 'rxjs';

/*
 * Any code samples you want to play with can go in this file.
 * Updates will trigger a live reload on http://localhost:1234/
 * after running npm start.
 */
const observer = {
    next: value => console.log('next', value),
    error: error => console.log('error', error),
    complete: () => console.log('complete!')
}


const observable = new Observable(subscriber => {
    let count = 0;

    const id = setInterval(()=>{
        subscriber.next(count);
        count +=1;
        subscriber.complete();
    },1000);



    return ()=>{
        console.log("called");
        clearInterval(id);
    }
});

console.log("Before");
observable.subscribe(observer);
console.log("after");

//of('Hello', 'RxJS').subscribe(console.log);

