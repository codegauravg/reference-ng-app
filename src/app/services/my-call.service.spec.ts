import { TestBed, inject } from '@angular/core/testing';

import { MyCallService } from './my-call.service';

describe('MyCallService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyCallService]
    });
  });

  it('should be created', inject([MyCallService], (service: MyCallService) => {
    expect(service).toBeTruthy();
  }));
});
