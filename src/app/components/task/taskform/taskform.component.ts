import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

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

      'name': ['',[Validators.required]],
      'description': ['',[Validators.required]],
      'priority': ['',[Validators.required]],
      'expireDate': ['',[Validators.required]]
    });
  }


   onsubmit():void {

    this.formTaskEdit.value
    this.formTaskEdit.get("name")?.value
    this.formTaskEdit.valid

    if(this.formTaskEdit.valid){
      console.log();
    }else{
      console.log(`Formulario con erroees y voy a mostrar los errores ${this.formTaskEdit.get('name')?.errors}`)
    }

    console.log(this.formTaskEdit.value)

    
  }

}
