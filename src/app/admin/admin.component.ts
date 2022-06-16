import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  sideMenuOpened: boolean = true;
  sideMenuLinks = [
    { text: 'Pacientes', routerLink: 'patient', icon: 'assets/icons/patient.png' },
    { text: 'Médicos', routerLink: 'medic', icon: 'assets/icons/doctor.png' },
    { text: 'Especialidades', routerLink: 'specialty', icon: 'assets/icons/stethoscope.png' }
  ]
  user = {
    profilePhoto: 'assets/images/profile-photo.jpg',
    username: 'Black Bahm',
    role: 'ADMIN'
  }

  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
  }

  toggleSideMenu(){
    this.sideMenuOpened = !this.sideMenuOpened;
  }

  logOut(){
    this.authService.logOut();
    this.router.navigate(['login-register']);
  }

}
