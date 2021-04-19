import {of,fromEvent,interval,from} from 'rxjs';
import {
    map,
    mapTo,
    pluck,
    filter,
    takeUntil,
    scan,
    takeWhile,
    tap,
    distinctUntilChanged,
    distinctUntilKeyChanged,
    debounceTime,catchError,
    debounce, switchMap,
} from 'rxjs/operators';
import {ajax} from "rxjs/ajax";
import {EMPTY} from "rxjs/src/internal/observable/empty";

const typeaheadContainer = document.getElementById('typeahead-container');
const inputBox = document.getElementById('text-input');
const input$ = fromEvent(inputBox,'keyup');
const BASE_URL = 'https://api.openbrewerydb.org/breweries'
input$.pipe(
    debounceTime(200),
    pluck('target','value'),
    distinctUntilChanged(),
    switchMap(searchTerm=>{
        return ajax.getJSON(
            `${BASE_URL}?by_name=${searchTerm}`).pipe(
                catchError((error,caught)=>{
                    //caught is for retry
                    return EMPTY; //ignored error
                })
        )
    }),

).subscribe(response=>{
    typeaheadContainer.innerHTML = response.map(b=>b.name).join(('<br>'))
})