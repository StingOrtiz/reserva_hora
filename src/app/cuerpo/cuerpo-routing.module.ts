import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CuerpoComponent} from 'src/app/cuerpo/cuerpo.component';
import {clienteComponent} from 'src/app/cuerpo/cliente/cliente.component';
import {ListasComponent} from 'src/app/cuerpo/listas/listas.component';
import { UsuariosComponent} from './usuarios/usuarios/usuarios.component';
import { AgendarComponent} from '../agendar/agendar.component'

const routes: Routes = [
  { path: '', 
    children:[
      {path: 'cliente', component:clienteComponent},
      {path: 'agendadas', component:clienteComponent},
      {path: 'horas/:id', component:AgendarComponent},
      {path: 'agendar', component:AgendarComponent},
      {path: 'derivaciones', component:clienteComponent},
      {path: 'calendario', component:clienteComponent},
      {path: 'usuario', component:UsuariosComponent},
    ]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CuerpoRoutingModule { }
export const routecomponent = [
  CuerpoComponent,clienteComponent,ListasComponent,AgendarComponent]
export const providerroute=[]


