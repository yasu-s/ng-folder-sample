import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

/**
 * 共通モジュール
 * @description 各種機能モジュールにimportして使用してください。
 */
@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [],
  exports: [CommonModule, FormsModule],
  providers: [],
})
export class SharedModule {}
