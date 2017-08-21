import { TestBed, inject } from '@angular/core/testing';

import { ChildCommService } from './child-comm.service';

describe('ChildCommService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChildCommService]
    });
  });

  it('should be created', inject([ChildCommService], (service: ChildCommService) => {
    expect(service).toBeTruthy();
  }));
});
