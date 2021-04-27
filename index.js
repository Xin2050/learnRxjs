import {BehaviorSubject, interval, Subject, timer} from 'rxjs';
import {multicast, refCount, share, tap} from "rxjs/operators";

const observer ={
    next: val=> console.log('next',val),
    error: err=> console.log('error',err),
    complete: ()=> console.log('complete'),
}

const subject = new BehaviorSubject("Hello");

const subscription = subject.subscribe(observer);

const secondSubscription = subject.subscribe(
    observer
)

subject.next('world');

setTimeout(()=>{
    subject.subscribe(observer);
},3000)


