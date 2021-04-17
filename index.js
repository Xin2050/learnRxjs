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
    debounceTime,
    debounce, switchMap,
} from 'rxjs/operators';
import {ajax} from "rxjs/ajax";

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
            `${BASE_URL}?by_name=${searchTerm}`)
    })
).subscribe(response=>{
    typeaheadContainer.innerHTML = response.map(b=>b.name).join(('<br>'))
})