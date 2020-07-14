
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../_models/user';
import {Horas} from 'src/app/_models/horas'

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  [x: string]: any;

  baseurl = "https://reservahora-json-kbefbqorma-ue.a.run.app/"
  constructor(private http: HttpClient) { }

  getAllUsuario(): Observable<any> {
    return this.http.get<User[]>(this.baseurl + 'usuario')
  
  }
  crearHora(hora: Horas) {
    return this.http.post(this.baseurl + 'horas', hora);
}
  crearUsuario(user: User){
    return this.http.post(this.baseurl + 'usuarios', user);
  }
  getCliente(id:number){/*  */
    return this.http.get<User>(this.baseurl + 'usuario/' + id)
  }
  getHoras(email: string): Observable<any> {
    return this.http.get(this.baseurl + 'horas/')
  }
  register(user: User) {
    return this.http.post(this.baseurl + `/users/register`, user);
}
  delete(id: number) {
    return this.http.delete(this.baseurl+`/users/`+ id);
}
  

}