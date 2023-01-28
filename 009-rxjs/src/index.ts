import { of, fromEvent } from 'rxjs';
import { switchMap, map, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

const search = document.getElementById('search')
const url = 'https://api.github.com/search/repositories?q='
const gitLabUrl = 'https://gitlab.com/api/v4/projects?search='

const search$ = fromEvent(search, 'input')
  .pipe(
    map(e => (e.target as HTMLInputElement).value),
    debounceTime(1000),
    distinctUntilChanged(),
    switchMap(v => ajax.getJSON(url + v))
  )

search$.subscribe({
  next: (value: any) => console.log('Repositories:', value.total_count),
  complete: () => console.log('Complete!'),
  error: (error) => console.log('Error!', error)
})

const gitLab$ = fromEvent(search, 'input')
.pipe(
  map(e => (e.target as HTMLInputElement).value),
  debounceTime(1000),
  distinctUntilChanged(),
  switchMap(v => ajax.getJSON(gitLabUrl + v))
)

gitLab$.subscribe({
next: (value: any) => console.log('Projects:', value),
complete: () => console.log('Complete!'),
error: (error) => console.log('Error!', error)
})