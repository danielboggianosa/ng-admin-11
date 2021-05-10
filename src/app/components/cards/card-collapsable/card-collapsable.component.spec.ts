import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCollapsableComponent } from './card-collapsable.component';

describe('CardCollapsableComponent', () => {
  let component: CardCollapsableComponent;
  let fixture: ComponentFixture<CardCollapsableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardCollapsableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardCollapsableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
