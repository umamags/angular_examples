import { TestBed } from '@angular/core/testing';

import { IportalService } from './iportal.service';

describe('IportalService', () => {
  let service: IportalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IportalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
