import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalBookComponent } from './internal-book.component';

describe('InternalBookComponent', () => {
  let component: InternalBookComponent;
  let fixture: ComponentFixture<InternalBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternalBookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
