import { NgModule } from '@angular/core';

import { SharedModule } from '@ng-sample/shared';
import { MENU_COMPONENTS } from '@ng-sample/menu/components';
import { MENU_PAGES } from '@ng-sample/menu/pages';
import { MenuRoutingModule } from './menu-routing.module';

/**
 * メニュー機能モジュール
 * @description メニュー機能を提供する機能モジュールです。
 */
@NgModule({
  imports: [
    SharedModule,
    MenuRoutingModule,
  ],
  declarations: [
    MENU_COMPONENTS,
    MENU_PAGES,
  ],
  providers: [],
})
export class MenuModule { }
