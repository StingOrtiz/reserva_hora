
import { ApiService } from 'src/app/_services/api.service';
import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertService, UserService, AuthenticationService } from 'src/app/_services';
import { first } from 'rxjs/operators';
import {Horas} from 'src/app/_models/horas';


@Component({
  selector: 'app-reunion',
  templateUrl: './reunion.component.html',
  styleUrls: ['./reunion.component.css']
})

export class ReunionComponent implements OnInit {
  private route: string;
  agendarForm: FormGroup;
  cliente: string;
  lugar:string;
  numpersonas: number;
  descripcion: string;
  fecha: Date;
   
 
  constructor(location: Location, 
      
      private formBuilder: FormBuilder,
      private router: Router,
      private authenticationService: AuthenticationService,
      private userService: UserService,
      private apiService: ApiService,
      private alertService: AlertService
      
    
      
  ) { 
    
  }


  
  ngOnInit() {
    
}
crearHora(){

  console.log(this.cliente);
  console.log(this.lugar);
  console.log(this.numpersonas);
  console.log(this.descripcion);
  console.log(this.fecha);

  let hora:Horas= new Horas();
  hora.cliente=this.cliente;
  hora.lugar=this.lugar;
  hora.numpersonas=this.numpersonas;
  hora.descripcion=this.descripcion;
  hora.fecha=this.fecha;
  
  this.apiService.crearHora(hora).subscribe( 
    data =>{
      alert( "Hora agregado!" );
      this.router.navigateByUrl( "/logged" );
    },
    error =>{
      alert( "Ocurrio un error" );
      console.log("Error", error);
    }
  );
}
}

