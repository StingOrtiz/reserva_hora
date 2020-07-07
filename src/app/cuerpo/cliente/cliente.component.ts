import { Component ,OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { Router } from "@angular/router";
@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class clienteComponent implements OnInit {

  public route: string;
  
  constructor(location: Location, router: Router) { 
    router.events.subscribe(val => {
      if (location.path().split('/')[2] == "cliente") {
        this.route = "Cliente"
      }else if(location.path().split('/')[2] == "derivaciones") {
        this.route = "Lista de Derivaciones";
      }else if(location.path().split('/')[2] == "agendadas") {
      this.route = "Lista de Horas Agendadas";
    }

      
    });
  }
  ngOnInit() {
    
  } 
}






