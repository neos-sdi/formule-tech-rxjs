import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponentComponent } from './map-component/map-component.component';
import { FilterComponent } from './filter/filter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SwitchmapComponent } from './switchmap/switchmap.component';
import { FilterSwitchmapComponent } from './filter-switchmap/filter-switchmap.component';
import { ConcatMapComponent } from './concat-map/concat-map.component';
import { CombineLastestComponent } from './combine-lastest/combine-lastest.component';
import { DistinctUntilChangedComponent } from './distinct-until-changed/distinct-until-changed.component';
import { DebounceTimeComponent } from './debounce-time/debounce-time.component';
import { CatchErrorComponent } from './catch-error/catch-error.component';
import {MenubarModule} from 'primeng/menubar';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {InputTextModule} from 'primeng/inputtext';
import {SkeletonModule} from 'primeng/skeleton';

@NgModule({
  declarations: [
    AppComponent,
    MapComponentComponent,
    FilterComponent,
    SwitchmapComponent,
    FilterSwitchmapComponent,
    ConcatMapComponent,
    CombineLastestComponent,
    DistinctUntilChangedComponent,
    DebounceTimeComponent,
    CatchErrorComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MenubarModule,
    ButtonModule,
    CardModule,
    InputTextModule,
    SkeletonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
