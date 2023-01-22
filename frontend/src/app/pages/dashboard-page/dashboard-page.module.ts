import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DashboardPageComponent } from './dashboard-page.component';
import { DashboardSummaryComponent } from './dashboard-summary/dashboard-summary.component';
import { DashboardPanelComponent } from './dashboard-panel/dashboard-panel.component';
import { RouterModule } from '@angular/router';
import { DashboardTradeComponent } from './dashboard-trade/dashboard-trade.component';
import { FeaturesModule } from 'src/app/features/features.module';
import { DashboardTradeModule } from './dashboard-trade/dashboard-trade.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    DashboardPageComponent,
    DashboardSummaryComponent,
    DashboardPanelComponent,
    DashboardTradeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    FeaturesModule,
    DashboardTradeModule,
    SharedModule
  ],
  exports: [DashboardSummaryComponent, DashboardSummaryComponent, DashboardPanelComponent],
  entryComponents: [DashboardSummaryComponent, DashboardSummaryComponent, DashboardPanelComponent]
})
export class DashboardPageModule { }
