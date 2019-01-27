import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RoutingConst } from '@ng-sample/core/constants';

/** Routing定義 */
const routes: Routes = [
  {
    path: '',
    redirectTo: RoutingConst.Menu.Top,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
