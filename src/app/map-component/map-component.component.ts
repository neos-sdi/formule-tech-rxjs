import { Component, OnInit } from '@angular/core';
import { from, map, of } from 'rxjs';

@Component({
  selector: 'app-map-component',
  templateUrl: './map-component.component.html',
  styleUrls: ['./map-component.component.scss']
})
export class MapComponentComponent {

  mapSource = of(1,2,3)
  mapArraySource = of([1,2,3])
  mapArraySourceFrom = from([1,2,3])

  resultSimpleMap: any[] = []
  resultSimpleMapArray: any[] = []
  resultCorrectSimpleMapArray: any[] = []
  resultArrayFrom: any[] = []

  subscribeSimpleMap(){
    this.resultSimpleMap=[]
    this.mapSource.pipe(
      map((x: any)=>x*10)
    ).subscribe(x => this.resultSimpleMap.push(x))
  }

  subscribeSimpleArrayMap(){
    this.resultSimpleMapArray=[]
    this.mapArraySource.pipe(
      map((x: any)=>x*10)
    ).subscribe(x=>this.resultSimpleMapArray.push(x))
  }

  subscribeCorrectSimpleArrayMap(){
    this.resultCorrectSimpleMapArray=[]
    this.mapArraySource.pipe(
      map((x: any)=>x.map((y: any)=>y*10))
    ).subscribe(x=>this.resultCorrectSimpleMapArray.push(x))
  }

  subscribeSimpleFromArrayMap(){
    this.resultArrayFrom=[]
    this.mapArraySourceFrom.pipe(
      map((x: any)=>x*10)
    ).subscribe(x=>this.resultArrayFrom.push(x))
  }
}
