import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonBrandComponent } from './button-brand.component';

describe('ButtonBrandComponent', () => {
  let component: ButtonBrandComponent;
  let fixture: ComponentFixture<ButtonBrandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonBrandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
