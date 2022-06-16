import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginRegisterComponent } from './components/login-register/login-register.component';
import { LogOutComponent } from './components/log-out/log-out.component';
import { NotAuthGuardGuard } from './guards/not-auth-guard.guard';
import { PatientComponent } from './patient/patient.component';

const routes: Routes = [
  { path: 'login-register', component: LoginRegisterComponent, canActivate: [NotAuthGuardGuard] },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard], children: [
    { path: 'patient', component: PatientComponent }
  ]},
  { path: 'logout', component: LogOutComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: 'login-register', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
