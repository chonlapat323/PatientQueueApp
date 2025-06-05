import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Booking } from './booking';

const routes: Routes = [{ path: '', component: Booking }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingRoutingModule { }
