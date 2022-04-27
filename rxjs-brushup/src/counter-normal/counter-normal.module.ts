import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

//container
import { CounterNormalComponent } from './container/counter-normal.component';

// components
import { CounterOutputComponent } from './components/counter-output.component';
import { CounterButtonsComponent } from './components/counter-buttons.component';


const routes: Routes = [
  { path: '', component: CounterNormalComponent }
]


@NgModule({
  declarations: [
    CounterNormalComponent,
    CounterButtonsComponent,
    CounterOutputComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild( routes )
  ]
})
export class CounterNormalModule { }
