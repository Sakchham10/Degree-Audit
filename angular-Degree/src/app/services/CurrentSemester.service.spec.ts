import { TestBed } from '@angular/core/testing';

import { CurrentSemesterService } from './CurrentSemester.service';

describe('CurrentSemesterService', () => {
  let service: CurrentSemesterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrentSemesterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
