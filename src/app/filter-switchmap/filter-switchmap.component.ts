import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { map, of, switchMap } from 'rxjs'

@Component({
    selector: 'app-filter-switchmap',
    templateUrl: './filter-switchmap.component.html',
    styleUrls: ['./filter-switchmap.component.scss'],
})
export class FilterSwitchmapComponent implements OnInit {
    values = of([1, 12, 3, 50, 32, 4, 22, 8, 18, 29])
    filteredValues: any[] = []
    constructor(private activatedRoute: ActivatedRoute) {}

    ngOnInit(): void {
        this.activatedRoute.paramMap.pipe(
          switchMap((params: any) =>{
            return this.values.pipe(
              map(x=>x.filter((y: any)=> y > params.get('id')!))
            )
          })
        ).subscribe(filteredValues=>{
          this.filteredValues = filteredValues
        })
    }
}
