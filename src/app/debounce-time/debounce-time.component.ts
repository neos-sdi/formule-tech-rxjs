import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-debounce-time',
  templateUrl: './debounce-time.component.html',
  styleUrls: ['./debounce-time.component.scss']
})
export class DebounceTimeComponent implements OnInit {
  fg = new FormGroup({
    searchTerm: new FormControl()
  })
  debounced:string[]= []
  notdebounced: string[] = []
  constructor() { }

  ngOnInit(): void {
    this.fg.controls.searchTerm.valueChanges.pipe(
      debounceTime(500)
    ).subscribe(val=>{
      this.debounced.push(val)
    })

    this.fg.controls.searchTerm.valueChanges.subscribe(val=>this.notdebounced.push(val))
  }

}
