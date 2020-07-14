import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Location } from "@angular/common";
import { ApiService } from 'src/app/_services/api.service';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.css'],
  providers: [ApiService]
})
export class ListasComponent {
  on: boolean;
  arreglo = [{ id: 'test' }];
  columna = [];
  displayedColumns = []
  dataSource = null;

  constructor(private router: Router, private location: Location, private api: ApiService) {

    if (this.location.path().split('/')[3] != null) {
      this.on = false;
    }
    else {
      this.on = true;
      if (this.location.path().split('/')[2] == "cliente") {
        this.getClientes();
      }
      else if (this.location.path().split('/')[2] == "agendadas") {
        this.getHoras();
      } 
    }
  }
  rellenar(data) {
    this.arreglo = data;
    var col = []; // define an empty array
    for (var i = 0; i < this.arreglo.length; i++) {
      for (let key in this.arreglo[i]) {
        if (this.displayedColumns.indexOf(key) === -1) {
          this.displayedColumns.push(key.toString());
        }
      }
    }
    for (var j = 0; j < this.displayedColumns.length; j++) {
      this.columna.push({ titulo: this.displayedColumns[j].toString(), name: this.displayedColumns[j].toString() });
    }
    this.dataSource = this.arreglo;
  }
  getClientes = () => {
    this.api.getAllUsuario().subscribe(
      data => {
        this.rellenar(data)
      },
      error => {
        console.log(error);
      }
    )
  }
  getHoras = () => {
    this.api.getHoras('').subscribe(
      data => {
        this.rellenar(data)
      },
      error => {
        console.log(error);
      }
    )
  }
  navegar(algo: string): void {
    this.router.navigate(['/logged/' + this.location.path().split('/')[2] + '/' + algo]);
  }
}