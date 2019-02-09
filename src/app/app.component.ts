import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <router-outlet #hoge="outlet" (activate)="onActive($event)"></router-outlet>
    <div>{{ hoge.component.constructor.name }}</div>
  `,
})
export class AppComponent {
  @ViewChild(RouterOutlet) outlet: RouterOutlet;

  onActive(event: any): void {
    if (event) {
    }
  }
}
