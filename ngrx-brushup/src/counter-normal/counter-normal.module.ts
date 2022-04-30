import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { CounterNormalComponent } from './container/counter-normal/counter-normal.component';

import { CounterButtonsComponent } from './components/counter-buttons.component';
import { CounterOutputComponent } from './components/counter-output.component';

const routes: Routes = [
  { path: '', component: CounterNormalComponent }
]

@NgModule({
  declarations: [
    CounterNormalComponent,
    CounterOutputComponent,
    CounterButtonsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild( routes )
  ]
})
export class CounterNormalModule { }
