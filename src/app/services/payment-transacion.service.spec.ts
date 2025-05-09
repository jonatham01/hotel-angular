import { TestBed } from '@angular/core/testing';

import { PaymentTransacionService } from './payment-transacion.service';

describe('PaymentTransacionService', () => {
  let service: PaymentTransacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaymentTransacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
