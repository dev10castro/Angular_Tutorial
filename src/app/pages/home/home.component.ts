import { Component } from '@angular/core';
import {TasklistComponent} from '../../components/task/tasklist/tasklist.component';
import {CommonModule} from '@angular/common';
import {NavbarComponent} from '../../components/navbar/navbar.component';
import {FooterComponent} from '../../components/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TasklistComponent, CommonModule, NavbarComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
