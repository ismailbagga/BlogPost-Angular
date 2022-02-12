import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeVerifyingComponent } from './code-verifying.component';

describe('CodeVerifyingComponent', () => {
  let component: CodeVerifyingComponent;
  let fixture: ComponentFixture<CodeVerifyingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodeVerifyingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeVerifyingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
