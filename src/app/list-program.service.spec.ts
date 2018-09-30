import { TestBed } from '@angular/core/testing';

import { ListProgramService } from './list-program.service';

describe('ListProgramService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListProgramService = TestBed.get(ListProgramService);
    expect(service).toBeTruthy();
  });
});
