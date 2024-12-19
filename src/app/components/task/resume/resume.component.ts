import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Task} from '../../models/task.model';
import {CommonModule} from '@angular/common';
import {TaskService} from '../../../service/task.service';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {
[x: string]: any;

@Input()
taskInput!:Task;


@Output()
eventEditTask=new EventEmitter<Task>();

constructor(private taskService: TaskService) {
}


changeStatus(taskId: number){
  this.taskService.changeStatus(taskId);
    }

changePriorityDown(taskId: number){
  this.taskService.changePriorityDown(taskId);
    }

changePriorityUp(taskId: number){
  this.taskService.changePriorityUp(taskId);
    }

deleteTask(taskId:number){
  this.taskService.deleteTask(taskId);
}

editTask(taskId:number):void{

  let task = this.taskService.getTask(taskId)[0];
  this.eventEditTask.emit(task);
}


}

