import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/** Routing定義 */
const routes: Routes = [
  {
    path: '',
    redirectTo: 'menu',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
