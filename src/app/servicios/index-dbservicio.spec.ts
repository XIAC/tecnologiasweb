import { TestBed } from '@angular/core/testing';

import { IndexDBServicio } from './index-dbservicio';

describe('IndexDBServicio', () => {
  let service: IndexDBServicio;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IndexDBServicio);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
