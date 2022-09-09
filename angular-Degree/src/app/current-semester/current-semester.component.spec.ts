import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentSemesterComponent } from './current-semester.component';

describe('CurrentSemesterComponent', () => {
  let component: CurrentSemesterComponent;
  let fixture: ComponentFixture<CurrentSemesterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CurrentSemesterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CurrentSemesterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
