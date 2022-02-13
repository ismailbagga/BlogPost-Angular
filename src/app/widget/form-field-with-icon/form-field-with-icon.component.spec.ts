import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFieldWithIconComponent } from './form-field-with-icon.component';

describe('FormFieldWithIconComponent', () => {
  let component: FormFieldWithIconComponent;
  let fixture: ComponentFixture<FormFieldWithIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormFieldWithIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFieldWithIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
