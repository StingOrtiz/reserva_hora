import { Component, HostListener, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-barralateral',
  templateUrl: './barralateral.component.html',
  styleUrls: ['./barralateral.component.css']
})
export class BarralateralComponent implements OnInit {
  @Output() enviar = new EventEmitter<boolean>();
  @Input() on: boolean;
  public usuario: boolean = false;
  public admin: boolean = true;
  public ucliente: boolean = false;
  router: Router;

  public cliente: boolean = false;
  public hora: boolean = false;
  public reuniones: boolean = false;
  public clienten: boolean = false;
  public mensaje: string;
  constructor( ) {}
  
  ocultar(msg: boolean) {
    this.enviar.emit(msg)

  }
  ngOnInit() {
    
  }
  //#region usuario
  Horacambia(){
    if (this.hora == true) {
      this.hora = false
    }
    else {
      this.hora = true
    }
  }
  clientecambia() {
    if (this.cliente == true) {
      this.cliente = false
    }
    else {
      this.cliente = true
    }
  }
  reunionescambia() {
    if (this.reuniones == true) {
      this.reuniones = false
    }
    else {
      this.reuniones = true
    }
  }
  //#endregion
  //#region admin
  clientencambia() {
    if (this.clienten == true) {
      this.clienten = false
    }
    else {
      this.clienten = true
    }
  }
  //#endregion
  //#region cambios
  usuarioon() {
    this.usuario = true;
    this.admin = false;
    this.ucliente = false;
  }
  adminon() {
    this.usuario = false;
    this.admin = this.on;
    this.ucliente = false;
  }
  uclienteon() {
    this.usuario = false;
    this.admin = false;
    this.ucliente = true;
  }
  //#endregion
}
