import { Component } from '@angular/core';
import {NavbarComponent} from '../../components/navbar/navbar.component';
import {TasklistComponent} from '../../components/task/tasklist/tasklist.component';
import {CommonModule} from '@angular/common';
import {FooterComponent} from '../../components/footer/footer.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [
    NavbarComponent,
    TasklistComponent,
    CommonModule,
    FooterComponent
  ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

}
