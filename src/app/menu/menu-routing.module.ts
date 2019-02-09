import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RoutingConst } from '@ng-sample/core/constants';
import { Menu2Component, MenuComponent } from '@ng-sample/menu/pages';

/** Routing定義 */
const routes: Routes = [
  {
    path: RoutingConst.Menu.Top,
    component: MenuComponent,
  },
  {
    path: 'menu2',
    component: Menu2Component,
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
