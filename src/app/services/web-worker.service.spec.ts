import { TestBed, inject } from '@angular/core/testing';

import { WebWorkerService } from './web-worker.service';

describe('WebWorkerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WebWorkerService]
    });
  });

  it('should be created', inject([WebWorkerService], (service: WebWorkerService) => {
    expect(service).toBeTruthy();
  }));
});
