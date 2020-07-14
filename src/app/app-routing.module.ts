import { RegisterComponent } from 'src/app/register/register.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from 'src/app/login/login.component';
import {AgendarComponent} from 'src/app/agendar/agendar.component'
import { from } from 'rxjs';
const routes: Routes = [
  { path:  '', component:LoginComponent},
  { path: 'register', component:RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routecomponent=[
  LoginComponent,
  RegisterComponent,
  AgendarComponent,
]
