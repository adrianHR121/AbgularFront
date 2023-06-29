import { TestBed } from '@angular/core/testing';

import { MenuJSService } from './menu-js.service';

describe('MenuJSService', () => {
  let service: MenuJSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuJSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
