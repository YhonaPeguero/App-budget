import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonExtenseComponent } from './button-extense.component';

describe('ButtonExtenseComponent', () => {
  let component: ButtonExtenseComponent;
  let fixture: ComponentFixture<ButtonExtenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonExtenseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonExtenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
