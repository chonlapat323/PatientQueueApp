import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Doctors } from './doctors';

const routes: Routes = [{ path: '', component: Doctors }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorsRoutingModule { }
