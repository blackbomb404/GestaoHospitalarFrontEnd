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
    { text: 'Pacientes', routerLink: '/admin', icon: 'assets/icons/patient.png' },
    { text: 'Médicos', routerLink: '/admin', icon: 'assets/icons/doctor.png' },
    { text: 'Especialidades', routerLink: '/admin', icon: 'assets/icons/stethoscope.png' }
  ]

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
