import {Component, OnInit} from '@angular/core';
import {Task} from '../../models/task.model';
import {CommonModule} from '@angular/common';
import {ResumeComponent} from "../resume/resume.component";
import {TaskformComponent} from '../taskform/taskform.component';
import {FormsModule} from '@angular/forms';
import {TaskService} from '../../../service/task.service';

@Component({
  selector: 'app-tasklist',
  standalone: true,
  imports: [CommonModule, ResumeComponent,TaskformComponent,FormsModule],
  templateUrl: './tasklist.component.html',
  styleUrl: './tasklist.component.css'
})

export class TasklistComponent implements OnInit{

  tasks: Task[] = [];

  taskOutput:Task|null=null;


  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(): void {
    this.tasks = this.taskService.getTasks(); // Sincroniza la lista con el servicio
  }

  editTask(task:Task){

    let task1 :Task = task;
    this.taskOutput=task1;
  }

}



