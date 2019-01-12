import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoutingConst } from '@ng-sample/core/constants';
import { MenuComponent } from '@ng-sample/menu/pages';

/** Routing定義 */
const routes: Routes = [
  {
    path: RoutingConst.Menu.Top, component: MenuComponent
  }
];

/**
 * メニュー機能用RoutingModule
 */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
