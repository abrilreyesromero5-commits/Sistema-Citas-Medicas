import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminDashboardRoutingModule } from './admin-dashboard-routing.module';
import { AdminDashboardComponent } from './admin-dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgApexchartsModule } from 'ng-apexcharts'; // ✅

@NgModule({
  declarations: [
    AdminDashboardComponent
  ],
  imports: [
    CommonModule,
    AdminDashboardRoutingModule,
    SharedModule,
    NgApexchartsModule // ✅ MUY IMPORTANTE
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA // ✅ evita errores NG8002
  ]
})
export class AdminDashboardModule { }
