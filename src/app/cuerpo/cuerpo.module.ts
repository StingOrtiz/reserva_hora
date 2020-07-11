import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CuerpoRoutingModule,routecomponent,providerroute} from 'src/app/cuerpo/cuerpo-routing.module';
import {MatTableModule} from '@angular/material';
import { UsuariosComponent} from './usuarios/usuarios/usuarios.component';
import { UsuariosCrearComponent} from './usuarios/usuarios-crear/usuarios-crear.component';
import { UsuariosEditarComponent} from './usuarios/usuarios-editar/usuarios-editar.component';







@NgModule({
    
  declarations: [routecomponent,    UsuariosComponent,
    UsuariosCrearComponent,
    UsuariosEditarComponent],
    
  providers:[providerroute],
  imports: [
    CommonModule,
    CuerpoRoutingModule,
    MatTableModule,

  ]
})
export class CuerpoModule { }
