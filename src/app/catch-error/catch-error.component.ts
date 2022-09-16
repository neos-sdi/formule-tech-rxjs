import { Component, OnInit } from '@angular/core';
import { catchError, concatMap, delay, ignoreElements, of, tap } from 'rxjs';

@Component({
  selector: 'app-catch-error',
  templateUrl: './catch-error.component.html',
  styleUrls: ['./catch-error.component.scss']
})
export class CatchErrorComponent implements OnInit {
  word$ = this.getValues()
  errors$= this.word$.pipe(
    ignoreElements(),
    catchError(err => of(err))
  )
  constructor() { }

  ngOnInit(): void {
  }

  private getValues(){
    return of('Hello', 'world', 'err', 'from', 'Neos-SDI').pipe(
      concatMap((word)=> of(word).pipe(delay(2000))),
      tap(word=>{
        if(word === 'err'){
          throw new Error('Oups, ca a planté...')
        }
      })
    )
  }

}
