import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CuerpoRoutingModule,routecomponent,providerroute} from 'src/app/cuerpo/cuerpo-routing.module';
import {MatTableModule} from '@angular/material';
import { UsuariosComponent} from './usuarios/usuarios/usuarios.component';
import { BrowserModule } from '@angular/platform-browser';
import {LoggedModule} from 'src/app/logged/logged.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';







@NgModule({
    
  declarations: [routecomponent,    UsuariosComponent],
    
  providers:[providerroute],
  imports: [
    CommonModule,
    CuerpoRoutingModule,
    MatTableModule,
    ReactiveFormsModule,
    FormsModule

  ]
})
export class CuerpoModule { }
