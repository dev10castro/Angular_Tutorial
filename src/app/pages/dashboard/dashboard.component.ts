import { Component } from '@angular/core';
import {NavbarComponent} from '../../components/navbar/navbar.component';
import {CommonModule} from '@angular/common';
import {RouterLink, RouterOutlet} from '@angular/router';
import {FooterComponent} from '../../components/footer/footer.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    NavbarComponent,
    CommonModule,
    RouterOutlet,
    RouterLink,
    FooterComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
