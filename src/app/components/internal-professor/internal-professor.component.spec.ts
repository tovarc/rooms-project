import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalProfessorComponent } from './internal-professor.component';

describe('InternalProfessorComponent', () => {
  let component: InternalProfessorComponent;
  let fixture: ComponentFixture<InternalProfessorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternalProfessorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalProfessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
