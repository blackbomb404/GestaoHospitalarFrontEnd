import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginRegisterComponent } from './components/login-register/login-register.component';
import { FlipModule } from 'ngx-flip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { AdminComponent } from './admin/admin.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtAuthHttpInterceptorService } from './services/jwt-auth-http-interceptor.service';
import { LogOutComponent } from './components/log-out/log-out.component';
import { PatientComponent } from './patient/patient.component';
import { MatDialogModule } from '@angular/material/dialog';
import { PatientDialogComponent } from './patient-dialog/patient-dialog.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { PatientCardComponent } from './patient-card/patient-card.component';
import { MedicComponent } from './medic/medic.component';
import { MedicCardComponent } from './medic-card/medic-card.component';
import { SpecialtyComponent } from './specialty/specialty.component';
import { MedicDialogComponent } from './medic-dialog/medic-dialog.component';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DeleteConfirmationDialogComponent } from './delete-confirmation-dialog/delete-confirmation-dialog.component';
import { SpecialtyDialogComponent } from './specialty-dialog/specialty-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginRegisterComponent,
    AdminComponent,
    LogOutComponent,
    PatientComponent,
    PatientDialogComponent,
    SearchBarComponent,
    PatientCardComponent,
    MedicComponent,
    MedicCardComponent,
    SpecialtyComponent,
    MedicDialogComponent,
    DeleteConfirmationDialogComponent,
    SpecialtyDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    FlipModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    HttpClientModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatTooltipModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtAuthHttpInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
