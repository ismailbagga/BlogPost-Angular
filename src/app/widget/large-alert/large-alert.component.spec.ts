import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LargeAlertComponent } from './large-alert.component';

describe('LargeAlertComponent', () => {
  let component: LargeAlertComponent;
  let fixture: ComponentFixture<LargeAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LargeAlertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LargeAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
