import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { TasklistComponent } from "./components/task/tasklist/tasklist.component";
import {FormsModule} from '@angular/forms'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, FormsModule, TasklistComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'David Castro';
  imagenaleatoria:string="";
  nombre:string=""
  numero:number=0;



  muestraimagenaleatoria(){
    let num:number = Math.trunc((Math.random()*1000)+100);
    this.imagenaleatoria="https://picsum.photos/200/300?random="+num;
  }

}




