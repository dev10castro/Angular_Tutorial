import {Component, OnChanges, SimpleChanges} from '@angular/core';
import {NavbarComponent} from '../../../components/navbar/navbar.component';
import {FooterComponent} from '../../../components/footer/footer.component';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {AuthService} from '../../../service/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    NavbarComponent,
    FooterComponent,ReactiveFormsModule,CommonModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent{

  formLogin : FormGroup;

  constructor(formBuilder: FormBuilder, private loginservice:AuthService, private router: Router) {
    this.formLogin = formBuilder.group({
      'email': ['', [Validators.required, Validators.email]],
      'password': ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  Onsubmit(){

    if (this.formLogin.valid) {
      console.log("El login es valido")
      this.loginservice.login(this.formLogin.value)
        .then(response => this.router.navigate(['/home']))
        .catch(error => console.log(error))
    } else {
      console.log("El login es invalido")
    }
  }

  loginWithGoogle() {
    this.loginservice.loginWithGoogle()
      .then(response => this.router.navigate(['/home']))
      .catch(error => console.log(error));
  }

}
