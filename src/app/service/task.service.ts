import { Injectable } from '@angular/core';
import {Task, TaskPriority, TaskStatus} from '../components/models/task.model';
import {TaskEvent} from '../components/models/TaskEvent.model';
import { Database, ref, listVal } from '@angular/fire/database';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  taskList: Task[] = [];

  constructor(private database:Database) { }


  getTasks(): Task[] {
    return this.taskList;
  }

  modifyTask(taskEvent: TaskEvent) {
    switch (taskEvent.action) {
      case "changePriorityUp":
        this.changePriorityUp(taskEvent.taskId);
        break;
      case "changeStatus":
        this.changeStatus(taskEvent.taskId);
        break;
      case "changePriorityDown":
        this.changePriorityDown(taskEvent.taskId);
        break;
      case "deleteTask":
        this.deleteTask(taskEvent.taskId);
        break;
    }
  }

  changeStatus(taskId: number){
    const task = this.taskList.find(task => task.id === taskId); // Encuentra la tarea por su ID
    if (task) {
      switch (task.status) {
        case TaskStatus.PENDING:
          task.status = TaskStatus.IN_PROGRESS;
          break;
        case TaskStatus.IN_PROGRESS:
          task.status = TaskStatus.COMPLETED;
          break;
        case TaskStatus.COMPLETED:
          task.status = TaskStatus.PENDING;
          break;
      }
    }
  }

  changePriorityDown(taskId: number){
    const task = this.taskList.find(task => task.id === taskId); // Encuentra la tarea por su ID
    if (task) {
      switch (task.priority) {
        case TaskPriority.HIGH:
          task.priority = TaskPriority.MEDIUM;
          break;
        case TaskPriority.MEDIUM:
          task.priority = TaskPriority.LOW;
          break;
        case TaskPriority.LOW:
          task.priority = TaskPriority.HIGH;
          break;
      }
    }
  }

  changePriorityUp(taskId: number){
    const task = this.taskList.find(t => t.id === taskId); // Encuentra la tarea por su ID
    if (task) {
      switch (task.priority) {
        case TaskPriority.HIGH:
          task.priority = TaskPriority.LOW;
          break;
        case TaskPriority.MEDIUM:
          task.priority = TaskPriority.HIGH;
          break;
        case TaskPriority.LOW:
          task.priority = TaskPriority.MEDIUM;
          break;
      }
    }
  }

  deleteTask(taskId: number): void {
    const task = this.taskList.find(t => t.id === taskId);
    if (task) {
      task.isDelete = true;
    }
  }

  addTask(task:Task){
    this.taskList.push(task);
    console.log('Nueva tarea añadida:', task);
  }

  getTask(taskId:number){
   return this.taskList.filter((task1:Task)=>{
      return taskId==task1.id;
    })
  }

  getTasksAll(): Observable<Task[]> {
    const taskRef = ref(this.database, "taskList");
    return listVal(taskRef) as Observable<Task[]>;
  }

  remove(taskId:string){

  }

}
