import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { from, map, Observable, of, toArray } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'RxJs';
  menu: MenuItem[] = [
    {
      label:'map',
      routerLink: 'map'
    },
    {
      label:'filter',
      routerLink: 'filter'
    },
    {
      label:'switchMap',
      routerLink: 'switchmap'
    },
    {
      label:'concatMap',
      routerLink: 'concatmap'
    },
    {
      label:'combineLatest',
      routerLink: 'combineLatest'
    },
    {
      label:'distinctUntilChanged',
      routerLink: 'distincuntilchanged'
    },
    {
      label:'debounceTime',
      routerLink: 'debouncetime'
    },
    {
      label:'catchError',
      routerLink: 'catcherror'
    }
  ]
}
