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

    },1000);



    return ()=>{
        console.log("called");
        clearInterval(id);
    }
});

console.log("Before");
let subscription = observable.subscribe(observer);
let subscription2 = observable.subscribe(observer);

subscription.add(subscription2);

setTimeout(()=>{
    subscription.unsubscribe();
},3500);

console.log("after");

//of('Hello', 'RxJS').subscribe(console.log);

