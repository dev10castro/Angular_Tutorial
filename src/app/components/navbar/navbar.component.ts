import {Component, OnInit} from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {AuthService} from '../../service/auth.service';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{

  isAuthenticated: boolean = false;

  constructor(private router: Router, private servicelog: AuthService) {

  }

  ngOnInit(): void {
    this.isAuthenticated = this.servicelog.isAuthenticated;
  }


  logout(){
    this.servicelog.logout().then( () => this.router.navigate(['/login']))
      .catch(error=>console.log(error))

  }
}
