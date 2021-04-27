import {BehaviorSubject, interval, ReplaySubject, Subject, timer} from 'rxjs';
import {multicast, refCount, share, tap} from "rxjs/operators";

const observer ={
    next: val=> console.log('next',val),
    error: err=> console.log('error',err),
    complete: ()=> console.log('complete'),
}

const subject = new ReplaySubject(2);
subject.next("hello")
subject.next('world');
subject.next('goodbye');

const subscription = subject.subscribe(observer);

const secondSubscription = subject.subscribe(
    observer
)



setTimeout(()=>{
    subject.subscribe(observer);
},3000)


