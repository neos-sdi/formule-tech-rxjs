import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CatchErrorComponent } from './catch-error/catch-error.component';
import { CombineLastestComponent } from './combine-lastest/combine-lastest.component';
import { ConcatMapComponent } from './concat-map/concat-map.component';
import { DebounceTimeComponent } from './debounce-time/debounce-time.component';
import { DistinctUntilChangedComponent } from './distinct-until-changed/distinct-until-changed.component';
import { FilterSwitchmapComponent } from './filter-switchmap/filter-switchmap.component';
import { FilterComponent } from './filter/filter.component';
import { MapComponentComponent } from './map-component/map-component.component';
import { SwitchmapComponent } from './switchmap/switchmap.component';

const routes: Routes = [
  {
    path: 'map', component: MapComponentComponent
  },
  {
    path: 'filter', component: FilterComponent
  },
  {
    path: 'switchmap', component: SwitchmapComponent,
    children:[
      {path: ':id', component:FilterSwitchmapComponent}
    ]
  },
  {
    path: 'concatmap', component: ConcatMapComponent,

  },
  {
    path: 'combineLatest', component: CombineLastestComponent,

  },
  {
    path: 'distincuntilchanged', component: DistinctUntilChangedComponent
  },
  {
    path: 'debouncetime', component: DebounceTimeComponent
  },
  {
    path: 'catcherror', component: CatchErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
