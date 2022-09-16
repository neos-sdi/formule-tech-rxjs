import { Component, OnInit } from '@angular/core'
import { concatMap, delay, distinctUntilChanged, from, map, mergeMap, of, Subscription, switchMap } from 'rxjs'

@Component({
    selector: 'app-distinct-until-changed',
    templateUrl: './distinct-until-changed.component.html',
    styleUrls: ['./distinct-until-changed.component.scss'],
})
export class DistinctUntilChangedComponent implements OnInit {
    values = from([1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 4, 5, 6, 7, 8]).pipe(
        concatMap((x) => of(x).pipe(delay(500))),
        distinctUntilChanged()
    )
    result: number[] = []
    constructor() {}

    ngOnInit(): void {}

    launch() {
        this.values.subscribe((x) => this.result.push(x))
    }
}
