import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogDataIconComponent } from './blog-data-icon.component';

describe('BlogDataIconComponent', () => {
  let component: BlogDataIconComponent;
  let fixture: ComponentFixture<BlogDataIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogDataIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogDataIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
