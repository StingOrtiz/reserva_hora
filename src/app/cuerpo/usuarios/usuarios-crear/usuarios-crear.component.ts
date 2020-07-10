import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/_services/user.service';
import { User } from 'src/app/_models/user';

@Component({
  selector: 'app-usuarios-crear',
  templateUrl: './usuarios-crear.component.html',
  styleUrls: ['./usuarios-crear.component.css']
})
export class UsuariosCrearComponent implements OnInit {

  // Atributos
  nombreUsuario:string;
  mail:string;
  password:string;
  tipo:string;


  errorNombre:boolean;

  constructor(
    private router: Router,
    private services:UserService
  ) { }

  ngOnInit(): void {
  }

  /**
   * 
   */
  crearUsuario(){

    console.log( this.nombreUsuario );
    console.log( this.mail );
    console.log( this.password );

    let user:User = new User();
    user.mail = this.mail;
    user.username = this.nombreUsuario;
    user.password = this.password;
    user.tipo = this.tipo;

    // Validacion 

    this.services.crearUsuario( user ).subscribe( 
      data =>{
        alert( "Usuario agregado!" );
        this.router.navigateByUrl( "/privado/usuarios" );
      },
      error =>{
        alert( "Ocurrio un error" );
        console.log("Error", error);
      }
    );

    //this.router.navigateByUrl( "/privado/usuarios" );
  }

}
