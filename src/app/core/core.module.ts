import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf } from '@angular/core';

/**
 * CodeModule
 *
 * @description
 * Singleton になるサービスなどを登録します。
 * AppModuleでのみimportしてください。
 */
@NgModule({
  imports: [CommonModule],
  declarations: [],
  exports: [],
  providers: [],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
