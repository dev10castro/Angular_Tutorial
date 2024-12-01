import { Injectable } from '@angular/core';
import {Task, TaskPriority, TaskStatus} from '../components/models/task.model';
import {TaskEvent} from '../components/models/TaskEvent.model';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  taskList: Task[] = [
    new Task(1, "Implementar autenticación", "Configurar autenticación de usuarios", TaskPriority.HIGH, TaskStatus.IN_PROGRESS, new Date("2024-11-01"), new Date("2024-11-20"), false),
    new Task(2, "Diseñar interfaz de usuario", "Crear diseño para la interfaz principal", TaskPriority.MEDIUM, TaskStatus.PENDING, new Date("2024-10-15"), new Date("2024-12-01"), false),
    new Task(3, "Desarrollar API", "Implementar API REST para los datos de la app", TaskPriority.HIGH, TaskStatus.COMPLETED, new Date("2024-10-05"), new Date("2024-10-25"), false),
    new Task(4, "Actualizar documentación", "Revisar y actualizar la documentación", TaskPriority.LOW, TaskStatus.PENDING, new Date("2024-11-05"), new Date("2024-11-15"), false),
    new Task(5, "Crear pruebas unitarias", "Escribir pruebas unitarias para la API", TaskPriority.MEDIUM, TaskStatus.IN_PROGRESS, new Date("2024-09-20"), new Date("2024-12-01"), false),
    new Task(6, "Configurar CI/CD", "Configurar integración y despliegue continuo", TaskPriority.HIGH, TaskStatus.COMPLETED, new Date("2024-10-01"), new Date("2024-10-20"), true),
    new Task(7, "Optimizar rendimiento", "Mejorar el rendimiento de la aplicación", TaskPriority.HIGH, TaskStatus.IN_PROGRESS, new Date("2024-10-10"), new Date("2024-11-10"), false),
    new Task(8, "Realizar pruebas de carga", "Ejecutar pruebas de carga en la API", TaskPriority.MEDIUM, TaskStatus.PENDING, new Date("2024-11-02"), new Date("2024-11-30"), false),
    new Task(9, "Configurar notificaciones", "Configurar sistema de notificaciones push", TaskPriority.LOW, TaskStatus.IN_PROGRESS, new Date("2024-09-30"), new Date("2024-10-15"), false),
    new Task(10, "Desplegar en producción", "Realizar el despliegue de la aplicación", TaskPriority.HIGH, TaskStatus.COMPLETED, new Date("2024-10-05"), new Date("2024-10-25"), false),
  ];

  constructor() { }



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




}
