import { Component, Input, Output } from '@angular/core';
import { Task, TaskPriority, TaskStatus } from '../../models/task.model';
import { CommonModule } from '@angular/common';
import { EventEmitter } from '@angular/core';
import { TaskEvent } from '../../models/TaskEvent.model';

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
taskInput: Task= new Task(4, "Actualizar documentación", "Revisar y actualizar la documentación", TaskPriority.LOW, TaskStatus.PENDING, new Date("2024-11-05"), new Date("2024-11-15"), false);

@Output()
eventTaskModify = new EventEmitter<TaskEvent>();


changeStatus(taskId: number){
  this.eventTaskModify.emit(new TaskEvent("changeStatus",taskId));
    }
  


changePriorityDown(taskId: number){
  this.eventTaskModify.emit(new TaskEvent("changePriorityDown",taskId));
    }
  


changePriorityUp(taskId: number){
  this.eventTaskModify.emit(new TaskEvent("changePriorityUp",taskId));
    }
  



deleteTask(taskId:number){
  this.eventTaskModify.emit(new TaskEvent("deleteTask",taskId));
}




}

