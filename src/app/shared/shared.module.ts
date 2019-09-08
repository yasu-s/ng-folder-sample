import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SHARED_COMPONENTS } from './components';

/**
 * 共通モジュール
 * @description 各種機能モジュールにimportして使用してください。
 */
@NgModule({
  imports: [CommonModule, FormsModule, RouterModule],
  declarations: [SHARED_COMPONENTS],
  exports: [CommonModule, FormsModule, SHARED_COMPONENTS],
  providers: [],
})
export class SharedModule {}
