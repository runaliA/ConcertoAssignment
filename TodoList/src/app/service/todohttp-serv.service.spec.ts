import { TestBed } from '@angular/core/testing';

import { TodohttpServService } from './todohttp-serv.service';

describe('TodohttpServService', () => {
  let service: TodohttpServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodohttpServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
