import { TestBed } from '@angular/core/testing';

import { TabsserviceService } from './tabsservice.service';

describe('TabsserviceService', () => {
  let service: TabsserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TabsserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
