import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-counter-store',
  templateUrl: './counter-store.component.html',
  styleUrls:['./counter-store.component.scss']
})
export class CounterStoreComponent implements OnInit, OnDestroy{

  // PROPERTIES
  counterTitle: string = '';
  counterTitleSubscription!: Subscription;

  constructor(
    private store: Store<{ counterStoreInstance: { title: string } }>
  ){}

  ngOnInit(): void{
    this.counterTitleSubscription = this.store.select('counterStoreInstance').subscribe( data => {
      console.log('changeCounterTitle called');
      this.counterTitle = data.title;
    });
  }

  ngOnDestroy(): void{
    this.counterTitleSubscription && this.counterTitleSubscription.unsubscribe();
  }

}
