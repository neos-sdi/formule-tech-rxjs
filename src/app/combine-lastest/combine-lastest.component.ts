import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, combineLatest, delay, from, interval, of, take } from 'rxjs';

@Component({
  selector: 'app-combine-lastest',
  templateUrl: './combine-lastest.component.html',
  styleUrls: ['./combine-lastest.component.scss']
})
export class CombineLastestComponent implements OnInit {
  table = 3

  values = interval(1000).pipe(
    take(10)
  )

  multiple = new BehaviorSubject(3)
  results: string[] = []
  obs = this.multiple.asObservable()
  constructor() { }

  ngOnInit(): void {
    combineLatest([
      this.values, this.obs
    ]).subscribe(([n, m])=>{
      this.table = m
      this.results.push(`${n} * ${m} = ${ n * m}`)
    })
  }

  changeTable(){
    this.multiple.next(this.multiple.value + 1)
  }


}
