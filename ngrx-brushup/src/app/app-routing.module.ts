import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:'counter-normal', loadChildren: () => import('../counter-normal/counter-normal.module').then(m => m.CounterNormalModule) },
  { path:'counter-store', loadChildren: () => import('../counter-store/counter-store.module').then(m => m.CounterStoreModule) }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
