import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getCounterTitle } from 'src/counter-store/service/counter.selectors';
import { CounterState } from 'src/counter-store/service/counter.state';

@Component({
  selector: 'app-counter-store',
  templateUrl: './counter-store.component.html',
  styleUrls:['./counter-store.component.scss']
})
export class CounterStoreComponent implements OnInit{

  // PROPERTIES
  counterTitle$!: Observable<string>;  

  constructor(
    private store: Store<{ counterStoreInstance: CounterState }>
  ){}

  ngOnInit(): void{
   this.counterTitle$ = this.store.select( getCounterTitle );
  }

}
