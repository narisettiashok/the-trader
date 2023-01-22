import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TradeTableComponent } from './trade-table.component';



@NgModule({
  declarations: [
    TradeTableComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [TradeTableComponent],
  entryComponents: [TradeTableComponent]
})
export class TradeTableModule { }
