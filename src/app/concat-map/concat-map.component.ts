import { Component, OnInit } from '@angular/core'
import { concatMap, delay, from, Observable, of, switchMap, tap } from 'rxjs'

@Component({
    selector: 'app-concat-map',
    templateUrl: './concat-map.component.html',
    styleUrls: ['./concat-map.component.scss'],
})
export class ConcatMapComponent implements OnInit {
    values = from([1, 12, 3, 50, 32, 4, 22, 8, 18, 29])
    switchMapResult: number = 0
    concatMapResult: number = 0
    concatMap$!: Observable<any>
    switchMap$!: Observable<any>
    constructor() {}

    ngOnInit(): void {
        this.concatMap$ = this.values.pipe(concatMap((n) => of(n).pipe(delay(500))))
        this.switchMap$ = this.values.pipe(switchMap((n) => of(n).pipe(delay(500))))
    }

    launch(){
      this.concatMap$.subscribe(result => this.concatMapResult = result)
      this.switchMap$.subscribe(result => this.switchMapResult = result)
    }
}
