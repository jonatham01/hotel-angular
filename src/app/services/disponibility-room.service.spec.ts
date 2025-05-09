import { TestBed } from '@angular/core/testing';

import { DisponibilityRoomService } from './disponibility-room.service';

describe('DisponibilityRoomService', () => {
  let service: DisponibilityRoomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DisponibilityRoomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
