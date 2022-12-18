import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BudgetRoutingModule } from './budget-routing.module';
import { BudgetComponent } from './components/budget/budget.component';
import { ModalIncomeExpenseComponent } from './modals/modal-income-expense/modal-income-expense.component';
import { ModalTransactionComponent } from './modals/modal-transaction/modal-transaction.component';
import { CategoryPipe } from './pipes/category.pipe';
import { TransactionTypePipe } from './pipes/transaction-type.pipe';


@NgModule({
  declarations: [
    BudgetComponent,
    ModalIncomeExpenseComponent,
    ModalTransactionComponent,
    CategoryPipe,
    TransactionTypePipe
  ],
  imports: [
    CommonModule,
    BudgetRoutingModule
  ]
})
export class BudgetModule { }
