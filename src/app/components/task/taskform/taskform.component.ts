import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {customValidator, customvalidatorPriority} from './taskform.validators';

@Component({
  selector: 'app-taskform',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './taskform.component.html',
  styleUrl: './taskform.component.css'
})
export class TaskformComponent {

  formTaskEdit:FormGroup;

  constructor(formBuilder:FormBuilder){
    this.formTaskEdit = formBuilder.group({

      'name': ['',[Validators.required,Validators.maxLength(50),Validators.minLength(5)]],
      'description': ['',[Validators.required,Validators.maxLength(250)]],
      'priority': ['',[Validators.required,customvalidatorPriority()]],
      'expireDate': ['',[Validators.required,customValidator()]]
    });
  }


   onsubmit():void {

    if(this.formTaskEdit.valid){
      console.log();
    }else{
      console.log(`Formulario con errores y voy a mostrar los errores ${this.formTaskEdit.get('name')?.errors}`)
    }

    console.log(this.formTaskEdit.value)


  }

}
