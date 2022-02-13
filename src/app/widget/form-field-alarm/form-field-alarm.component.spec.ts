import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFieldAlarmComponent } from './form-field-alarm.component';

describe('FormFieldAlarmComponent', () => {
  let component: FormFieldAlarmComponent;
  let fixture: ComponentFixture<FormFieldAlarmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormFieldAlarmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFieldAlarmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
