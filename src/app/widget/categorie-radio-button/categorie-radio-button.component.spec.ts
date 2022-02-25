import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorieRadioButtonComponent } from './categorie-radio-button.component';

describe('CategorieRadioButtonComponent', () => {
  let component: CategorieRadioButtonComponent;
  let fixture: ComponentFixture<CategorieRadioButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategorieRadioButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorieRadioButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
