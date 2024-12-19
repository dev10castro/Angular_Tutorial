import {Routes} from '@angular/router';
import {LoginComponent} from './pages/auth/login/login.component';
import {SigninComponent} from './pages/auth/signin/signin.component';
import {HomeComponent} from './pages/home/home.component';
import {TasksComponent} from './pages/tasks/tasks.component';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {NotfoundComponent} from './pages/notfound/notfound.component';
import {StatsComponent} from './components/dashboard/stats/stats.component';
import {ProfileComponent} from './components/dashboard/profile/profile.component';
import {canActivate, redirectUnauthorizedTo} from '@angular/fire/auth-guard';
import {TaskformComponent} from './components/task/taskform/taskform.component';

export const routes: Routes = [
  {path:'home', component:HomeComponent,...canActivate(() => redirectUnauthorizedTo(['/login']))},
  {path:'tasks', component:TasksComponent,...canActivate(() => redirectUnauthorizedTo(['/login']))},
  {path:'login', component:LoginComponent},
  {path:'taskform', component:TaskformComponent,...canActivate(() => redirectUnauthorizedTo(['/login']))},
  {path:'signin', component:SigninComponent},

  {path:'dashboard',component:DashboardComponent,...canActivate(() => redirectUnauthorizedTo(['/login'])),children:[
      {path: 'stats', component: StatsComponent, ...canActivate(() => redirectUnauthorizedTo(['/login'])) },
      { path: 'profile', component: ProfileComponent, ...canActivate(() => redirectUnauthorizedTo(['/login'])) },
    ]},
  {path:'notfound', component:NotfoundComponent},
  {path:'', redirectTo:'/login', pathMatch:'full'},
  {path: '**',redirectTo:'/notfound',pathMatch:'full'}
];
