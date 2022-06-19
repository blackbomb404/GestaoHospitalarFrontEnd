import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { AuthenticationRequest } from '../../models/AuthenticationRequest';
import { AuthenticationService } from '../../services/authentication.service';
import { confirmPasswordValidator } from '../../types/validators/confirmPassword.validator';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.scss']
})
export class LoginRegisterComponent implements OnInit {
  loginForm: FormGroup;
  registerForm: FormGroup;
  flip: boolean = false;

  constructor(private fb: FormBuilder, private authService: AuthenticationService, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

    this.registerForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, { validators: confirmPasswordValidator } );
  }

  get login_username(){
    return this.loginForm.get('username');
  }
  get login_password(){
    return this.loginForm.get('password');
  }

  get register_firstname(){
    return this.registerForm.get('firstname');
  }
  get register_lastname(){
    return this.registerForm.get('lastname');
  }
  get register_email(){
    return this.registerForm.get('email');
  }
  get register_password(){
    return this.registerForm.get('password');
  }
  get register_confirmPassword(){
    return this.registerForm.get('confirmPassword');
  }

  ngOnInit(): void {
  }

  onLoginSubmit(){
    this.authService.authenticate(this.loginForm.value as AuthenticationRequest)
      .subscribe({
        next: data => {
          // console.log(data);
          console.log('Is user logged in? '+ this.authService.isUserLoggedIn());
          this.router.navigate(['admin'])
        },
        error: error => { console.log(error)}
      })
  }
  onRegisterSubmit(){
    console.log(this.registerForm.value);
  }

  toggleFlip(){
    this.flip = !this.flip;
    this.loginForm.reset();
    this.registerForm.reset();
  }

}
