import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorDashboardRoutingModule } from './doctor-dashboard-routing.module';
import { DoctorDashboardComponent } from './doctor-dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgApexchartsModule } from 'ng-apexcharts'; // ✅ IMPORTANTE

@NgModule({
  declarations: [
    DoctorDashboardComponent
  ],
  imports: [
    CommonModule,
    DoctorDashboardRoutingModule,
    SharedModule,
    NgApexchartsModule // ✅ AQUÍ
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA // ✅ evita errores de propiedades
  ]
})
export class DoctorDashboardModule { }
