import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardBorderLeftComponent } from './card-border-left.component';

describe('CardBorderLeftComponent', () => {
  let component: CardBorderLeftComponent;
  let fixture: ComponentFixture<CardBorderLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardBorderLeftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardBorderLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
