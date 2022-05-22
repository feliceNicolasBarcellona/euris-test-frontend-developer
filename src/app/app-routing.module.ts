import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'stores', loadChildren: () => import('./features/stores/stores.module').then(m => m.StoresModule) },
  { path: '**', redirectTo: 'stores' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
