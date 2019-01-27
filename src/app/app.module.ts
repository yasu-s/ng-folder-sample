import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CoreModule } from '@ng-sample/core';
import { MenuModule } from '@ng-sample/menu';
import { SharedModule } from '@ng-sample/shared';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CoreModule, SharedModule, AppRoutingModule, MenuModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
