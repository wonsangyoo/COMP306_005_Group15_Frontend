import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr'; 
import { AppComponent } from './app.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { PatientDetailComponent } from './patient-details/patient-detail/patient-detail.component';
import { PatientDetailListComponent } from './patient-details/patient-detail-list/patient-detail-list.component';
import { FormsModule }   from '@angular/forms';
import { PatientDetailService } from './shared/patient-detail.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutusComponent } from './aboutus/aboutus.component';
// import { Observable } from 'rxjs';


@NgModule({
  declarations: [
    AppComponent,
    PatientDetailsComponent,
    PatientDetailComponent,
    PatientDetailListComponent,
    NavbarComponent,
    AboutusComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AppRoutingModule,
    MatToolbarModule,
    // Observable
  ],
  providers: [PatientDetailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
