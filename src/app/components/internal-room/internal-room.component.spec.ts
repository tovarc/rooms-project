import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalRoomComponent } from './internal-room.component';

describe('InternalRoomComponent', () => {
  let component: InternalRoomComponent;
  let fixture: ComponentFixture<InternalRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternalRoomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
