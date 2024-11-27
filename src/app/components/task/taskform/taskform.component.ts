import { CommonModule } from '@angular/common';
import {Component, EventEmitter, Input, OnChanges, output, Output, SimpleChanges} from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {customValidator, customvalidatorPriority} from './taskform.validators';
import {Task, TaskPriority, TaskStatus} from '../../models/task.model';

@Component({
  selector: 'app-taskform',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,],
  templateUrl: './taskform.component.html',
  styleUrl: './taskform.component.css'
})
export class TaskformComponent {

  @Output()
  taskCreated: EventEmitter<Task> = new EventEmitter<Task>(); // Emisor de eventos


  formTaskEdit: FormGroup;

  constructor(formBuilder: FormBuilder) {
    this.formTaskEdit = formBuilder.group({

      'name': ['', [Validators.required, Validators.maxLength(50), Validators.minLength(5)]],
      'description': ['', [Validators.required, Validators.maxLength(250)]],
      'priority': ['', [Validators.required, customvalidatorPriority()]],
      'expireDate': ['', [Validators.required, customValidator()]]
    });
  }

  onsubmit(): void {
    if (this.formTaskEdit.valid) {
      console.log('Formulario correcto y creamos nueva tarea')
      if (this.formTaskEdit.valid) {
        console.log('Formulario correcto y creamos nueva tarea');

        // instanciamos las variables necesarias para crear una nueva tarea
        const id: number = Math.floor(Math.random() * 100);
        const name = this.formTaskEdit.get('name')?.value;
        const description = this.formTaskEdit.get('description')?.value;
        const priority: TaskPriority = this.formTaskEdit.get('priority')?.value;
        const status: TaskStatus = TaskStatus.PENDING;
        const creationDate: Date = new Date();
        const expirationDate: Date = this.formTaskEdit.get('expireDate')?.value;
        const idDelete: boolean = false;

        // Crear nueva instancia de Task
        let newTask = new Task(id, name, description, priority, status, creationDate, expirationDate, idDelete);

        // añadimos la tarea a la lista de tareas
        console.log(newTask);

        this.taskCreated.emit(newTask);

        this.formTaskEdit.reset();


      } else {
        console.log(`Formulario con errores y voy a mostrar los errores ${this.formTaskEdit.get('name')?.errors}`)
      }

    }

  }

  loadTaskIntoForm(task: Task): void {
    this.formTaskEdit.patchValue({
      name: task.name,
      description: task.description,
      priority: task.priority,
      expireDate: task.expirationDate.toISOString().slice(0, 16), // Ajustar para datetime-local
    });
  }


}
