import { CommonModule } from '@angular/common';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { EditListComponent } from './task/edit-list/edit-list.component';
import { TodoListComponent } from './task/todo-list/todo-list.component';

const routes: Routes = [
  { path:'', redirectTo:'login', pathMatch: 'full'},
	{ path:'signup', component: SignupComponent },
	{ path:'login',	component: LoginComponent		  },
	{ path:'editlist',	component: EditListComponent},
	{ path:'todolist',	component: TodoListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


