import {BehaviorSubject, Subject} from "rxjs";
import {distinctUntilKeyChanged, pluck, scan} from "rxjs/operators";

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