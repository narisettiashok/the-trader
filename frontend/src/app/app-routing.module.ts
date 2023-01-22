import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { DashboardSummaryComponent } from './pages/dashboard-page/dashboard-summary/dashboard-summary.component';
import { DashboardTradeComponent } from './pages/dashboard-page/dashboard-trade/dashboard-trade.component';
import { ErrorPageComponent } from './pages/error-page/error-page/error-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { PagesModule } from './pages/pages.module';
import { RegisterPageComponent } from './pages/register-page/register-page.component';

const routes: Routes = [
  {path: '404', component: ErrorPageComponent},
  // {path: '**', component: ErrorPageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'register', component: RegisterPageComponent},
  {path: 'dashboard', component: DashboardPageComponent,
  children: [
    {path: 'summary', component: DashboardSummaryComponent},
    {path: 'trade', component: DashboardTradeComponent},
    {path: '**', component: DashboardSummaryComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes), PagesModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
