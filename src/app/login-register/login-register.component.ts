import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { confirmPasswordValidator } from '../types/validators/confirmPassword.validator';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.scss']
})
export class LoginRegisterComponent implements OnInit {
  loginForm: FormGroup;
  registerForm: FormGroup;
  flip: boolean = false;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
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

  get login_email(){
    return this.loginForm.get('email');
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
    console.log(this.loginForm.value);
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
