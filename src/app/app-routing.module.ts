import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, Router } from '@angular/router';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', component: PatientDetailsComponent },
  { path: 'aboutus', component: AboutusComponent }
];

@NgModule({
  declarations: [
    
  ],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
