import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BalanceStatusComponent } from './components/balance-status/balance-status.component';
import { ButtonActionComponent } from './components/button-action/button-action.component';
import { ButtonExpenseComponent } from './components/button-expense/button-expense.component';
import { ChartComponent } from './components/chart/chart.component';
import { IconComponent } from './components/icon/icon.component';
import { TopbarComponent } from './components/topbar/topbar.component';


const components = [
  BalanceStatusComponent,
  ButtonActionComponent,
  ButtonExpenseComponent,
  ChartComponent,
  IconComponent,
  TopbarComponent
]
@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule
  ],
  exports: [...components]
})
export class SharedModule { }

