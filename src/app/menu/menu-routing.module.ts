import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MenuComponent } from '@ng-sample/menu/pages';

/** Routing定義 */
const routes: Routes = [
  {
    path: '',
    component: MenuComponent,
  },
];

/**
 * メニュー機能用RoutingModule
 */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuRoutingModule {}
