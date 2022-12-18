import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonExpenseComponent } from './button-expense.component';

describe('ButtonExpenseComponent', () => {
  let component: ButtonExpenseComponent;
  let fixture: ComponentFixture<ButtonExpenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonExpenseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonExpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
