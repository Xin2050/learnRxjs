import {of, fromEvent, Subject, interval} from 'rxjs';
import {map, mapTo, pluck, filter, tap} from 'rxjs/operators';

//loadingService
const loading$ = new Subject();
const loadingService = {
    showLoading: ()=>loading$.next(true),
    hideLoading:()=>loading$.next(false),
    loadingStatus$: loading$.asObservable(),
}


const loadingOverlay = document.getElementById('loading-overlay');
loadingService.loadingStatus$.subscribe(isLoading=>{
    if(isLoading){
        loadingOverlay.classList.add('open');
    }else{
        loadingOverlay.classList.remove('open');
    }
});
loadingService.showLoading();
setTimeout(()=>loadingService.hideLoading(),3000);

