import { TestBed } from '@angular/core/testing';

import { RoomGaleryService } from './room-galery.service';

describe('RoomGaleryService', () => {
  let service: RoomGaleryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoomGaleryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
