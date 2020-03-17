import { TestBed } from '@angular/core/testing';

import { MenuComponent } from './menu.component';

describe('AppComponent', () => {
  let component: MenuComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MenuComponent],
    });

    component = TestBed.inject(MenuComponent);
  });

  it('should create the app', () => {
    // verify
    expect(component).toBeDefined();
  });

  it('title', () => {
    // verify
    expect(component.title).toBe('ng-sample');
  });
});
