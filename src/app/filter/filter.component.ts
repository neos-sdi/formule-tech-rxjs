import { Component, OnInit } from '@angular/core';
import { filter, from, map, of, toArray } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  filter: number = 0
  values = of(1, 12, 3, 50, 32, 4, 22, 8, 18, 29)
  arrayValues = of([1, 12, 3, 50, 32, 4, 22, 8, 18, 29])
  fromValues = from([1, 12, 3, 50, 32, 4, 22, 8, 18, 29])
  constructor() { }

  resultSimpleFilter: any[] = []
  resultSimpleFilterArray: any[] = []
  resultCorrectSimpleFilterArray: any[] = []
  resultArrayFrom: any[] = []

  ngOnInit(): void {
  }

  simpleFilter(){
    this.resultSimpleFilter=[]
    this.values.pipe(
      filter(x=>x > this.filter)
    ).subscribe(result=>this.resultSimpleFilter.push(result))
  }

  simpleArrayFilter(){
    this.resultSimpleFilterArray=[]
    this.arrayValues.pipe(
      filter((x: any)=>x > this.filter)
    ).subscribe(result=>this.resultSimpleFilterArray.push(result))
  }

  arrayFilter(){
    this.resultCorrectSimpleFilterArray=[]
    this.arrayValues.pipe(
      map((x: any)=> x.filter((y: any)=> y > this.filter))
    ).subscribe(x=>this.resultCorrectSimpleFilterArray.push(x))
  }

  filterFromArray(){
    this.resultArrayFrom=[]
    this.fromValues.pipe(
      filter((x: any)=>x > this.filter),
      toArray(),
      map((x:number[])=>x.sort((a:number, b: number)=> { return a > b ? 1: -1}))
    ).subscribe(x=>this.resultArrayFrom.push(x))
  }

}
