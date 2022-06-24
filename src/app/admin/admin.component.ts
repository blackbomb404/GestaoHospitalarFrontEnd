import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  sideMenuOpened: boolean = true;
  sideMenuMode!: 'side' | 'push' | 'over';
  sideMenuLinks = [
    { text: 'Pacientes', routerLink: 'patient', icon: 'assets/icons/patient.png' },
    { text: 'Médicos', routerLink: 'medic', icon: 'assets/icons/doctor.png' },
    { text: 'Especialidades', routerLink: 'specialty', icon: 'assets/icons/stethoscope.png' }
  ]
  user = {
    profilePhoto: 'assets/images/profile-photo.jpg',
    username: ''
    // role: 'ADMIN'
  }

  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    this.user.username = this.authService.getFirstname() ?? 'not-logged-in';
    this.breakpointObserver.observe(['(max-width: 900px)'])
      .subscribe(result => {
        if(result.matches){
          this.sideMenuOpened = false;
          this.sideMenuMode = 'over';
        } else {
          this.sideMenuOpened = true;
          this.sideMenuMode = 'side';
        }
    })
  }

  toggleSideMenu(){
    this.sideMenuOpened = !this.sideMenuOpened;
  }

  logOut(){
    this.authService.logOut();
    this.router.navigate(['login-register']);
  }

}
