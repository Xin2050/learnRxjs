import {of, fromEvent, BehaviorSubject, Subject} from 'rxjs';
import {map, mapTo, pluck, filter, scan, distinctUntilKeyChanged} from 'rxjs/operators';


export class ObservableStore {

    constructor(initialState) {
        this._store = new BehaviorSubject(
            initialState
        )
        this._stateUpdate = new Subject();
        this._stateUpdate.pipe(
            scan((acc,curr)=>{
                return {...acc,...curr}
            },initialState)
        ).subscribe(this._store)
    }

    updateState(stateUpdate) {
        this._stateUpdate.next(stateUpdate);
    }

    selectState(stateKey) {
        return this._store.pipe(
            distinctUntilKeyChanged(stateKey),
            pluck(stateKey)
        )
    }
    stateChanges() {
        return this._store.asObservable()
    }

}

const store = new ObservableStore({
    user:'brian',
    isAuthenticated:false,
})

store.selectState('user').subscribe(console.log);

store.updateState({
    user:'joe'
})

store.updateState({
    isAuthenticated:true
})
