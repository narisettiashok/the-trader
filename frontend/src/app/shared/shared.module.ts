import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TradeTableModule } from './trade-table/trade-table.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TradeTableModule
  ],
  exports: [TradeTableModule]
})
export class SharedModule { }
