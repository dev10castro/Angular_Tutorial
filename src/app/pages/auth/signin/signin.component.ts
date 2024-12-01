import { Component } from '@angular/core';
import {NavbarComponent} from '../../../components/navbar/navbar.component';
import {FooterComponent} from '../../../components/footer/footer.component';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [
    NavbarComponent,
    FooterComponent
  ],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {

}
