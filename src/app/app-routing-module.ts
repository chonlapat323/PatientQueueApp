import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'auth', loadChildren: () => import('./auth/auth-module').then(m => m.AuthModule) }, { path: 'booking', loadChildren: () => import('./booking/booking-module').then(m => m.BookingModule) }, { path: 'patients', loadChildren: () => import('./patients/patients-module').then(m => m.PatientsModule) }, { path: 'appointments', loadChildren: () => import('./appointments/appointments-module').then(m => m.AppointmentsModule) }, { path: 'doctors', loadChildren: () => import('./doctors/doctors-module').then(m => m.DoctorsModule) }, { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard-module').then(m => m.DashboardModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
