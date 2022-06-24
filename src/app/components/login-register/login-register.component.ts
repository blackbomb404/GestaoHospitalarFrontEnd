import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { MatCheckboxChange } from '@angular/material/checkbox';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';
import { UtilService } from 'src/app/util.service';
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

  constructor(
    private fb: FormBuilder,
    private authService: AuthenticationService,
    private router: Router,
    private userService: UserService,
    private utilService: UtilService) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

    this.registerForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      salary: ['', [Validators.required, Validators.min(0)]],
      authorityIds: [''],
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, { validators: confirmPasswordValidator } );
  }
  authorityValues: string[] = [];

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
  get register_salary(){
    return this.registerForm.get('salary');
  }
  get register_authorities(){
    return this.registerForm.get('authorityIds');
  }
  set register_authorities(value: any){
    this.registerForm.get('authorityIds')?.setValue(value);
  }
  get register_username(){
    return this.registerForm.get('username');
  }
  get register_password(){
    return this.registerForm.get('password');
  }
  get register_confirmPassword(){
    return this.registerForm.get('confirmPassword');
  }

  checkBoxes = [
    { value: '1', text: 'Usuário' },
    { value: '2', text: 'Administrador' }
, ]

  ngOnInit(): void {
  }

  onLoginSubmit(){
    // this.register_authorities?.value = this.authorityValues;
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
    // console.log(this.registerForm.value);
    this.userService.add(this.registerForm.value).subscribe(data => {
      this.utilService.reloadCurrentComponent(this.router);
    });
  }

  toggleFlip(){
    this.flip = !this.flip;
    this.loginForm.reset();
    this.registerForm.reset();
  }

  onCheckBoxChange(event: MatCheckboxChange){
    if(event.checked){
      this.authorityValues.push(event.source.value);
    } else {
      this.authorityValues.splice(this.authorityValues.indexOf(event.source.value), 1);
    }
    this.register_authorities = this.authorityValues;
  }

}
