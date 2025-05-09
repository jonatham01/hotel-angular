import { TestBed } from '@angular/core/testing';

import { AttributeRoomService } from './attribute-room.service';

describe('AttributeRoomService', () => {
  let service: AttributeRoomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AttributeRoomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
