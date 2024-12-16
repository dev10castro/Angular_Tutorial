import { Component } from '@angular/core';
import {NavbarComponent} from '../../../components/navbar/navbar.component';
import {FooterComponent} from '../../../components/footer/footer.component';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgClass, NgIf} from '@angular/common';
import {AuthService} from '../../../service/auth.service';
import {passwordMatchValidator} from './signin.validators';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [
    NavbarComponent,
    FooterComponent,
    NgIf,
    ReactiveFormsModule,
    NgClass
  ],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {

  formSignin: FormGroup;

  constructor(private formBuilder: FormBuilder, private registerservice: AuthService, private router: Router) {
    this.formSignin = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(50)]],
      lastName: ['', [Validators.required, Validators.maxLength(50), Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email]],
      username: ['', [Validators.required, Validators.maxLength(50), Validators.minLength(5)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]]
    }, {validators: passwordMatchValidator});
  }


  Onsubmit() {

    if (this.formSignin.valid) {
      console.log("Formulario Valido")
      this.registerservice.register(this.formSignin.value)
        .then(response => {
          console.log(response);
          this.router.navigate(['/login'])

        })
        .catch(error => console.log(error))

    }

  }
}
