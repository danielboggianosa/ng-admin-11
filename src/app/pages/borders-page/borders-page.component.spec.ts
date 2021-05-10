import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BordersPageComponent } from './borders-page.component';

describe('BordersPageComponent', () => {
  let component: BordersPageComponent;
  let fixture: ComponentFixture<BordersPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BordersPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BordersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
