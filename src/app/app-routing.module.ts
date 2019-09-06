import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/** Routing定義 */
const routes: Routes = [
  {
    path: '',
    redirectTo: 'menu',
    pathMatch: 'full',
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then((mod) => mod.MenuModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
