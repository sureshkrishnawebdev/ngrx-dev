import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { CounterStoreComponent } from './container/counter-store/counter-store.component';

import { CounterStoreButtonComponent } from './components/counter-store-button.component';
import { CounterStoreOutputComponent } from './components/counter-store-output.component';

import { StoreModule } from '@ngrx/store';
import { counterReducer } from './service/counter.reducer';


const routes: Routes = [
  { path: '', component: CounterStoreComponent}
]

@NgModule({
  declarations: [
    CounterStoreComponent,
    CounterStoreButtonComponent,
    CounterStoreOutputComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild( routes ),
    StoreModule.forRoot(
      { counterStoreInstance: counterReducer }
      )
  ]
})
export class CounterStoreModule { }
