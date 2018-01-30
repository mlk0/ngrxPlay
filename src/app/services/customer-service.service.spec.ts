import { TestBed, inject } from '@angular/core/testing';

import { CustomerService } from './customer-service.service';

describe('CustomerServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomerService]
    });
  });

  it('should be created', inject([CustomerService], (service: CustomerService) => {
    expect(service).toBeTruthy();
  }));
});
