import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import path from 'path';
import { LoginComponent } from './components/auth/login/login.component';
import { SigninComponent } from './components/auth/signin/signin.component';
import { TasklistComponent } from './components/task/tasklist/tasklist.component';

export const routes: Routes = [
   {path:'login',component:LoginComponent},
   {path:'sigin',component:SigninComponent},
   {path:'tasklist',component:TasklistComponent},
   {path:'',redirectTo:'/tasklist',pathMatch:'full'}
];