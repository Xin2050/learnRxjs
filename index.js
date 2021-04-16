import {interval,timer} from 'rxjs';


const timer$ = timer(2000); // interval(1000)


timer$.subscribe(console.log);




