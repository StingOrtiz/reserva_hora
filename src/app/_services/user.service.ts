import { Horas } from 'src/app/_models/horas';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../_models';


@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }
    baseurl = "https://reservahora-json-kbefbqorma-ue.a.run.app/"

    getAll() {
        return this.http.get<User[]>(`${config.apiUrl}/users`);
    }

    register(user: User) {
        return this.http.post(`${config.apiUrl}/users/register`, user);
    }

    delete(id: number) {
        return this.http.delete(`${config.apiUrl}/users/${id}`);
    }
    crearUsuario(user: User) {
        user.tipo = "ucliente"
        return this.http.post(this.baseurl +'usuario', user);
    }
    crearHora(hora: Horas) {
        return this.http.post(this.baseurl +'horas', hora);
    }
    obtenerUsuarioPorId(  id:number ){
        return this.http.get<User>(this.baseurl + "usuario/"+id );
      }
    
      editarUsuario( user:User ){
        return this.http.put( this.baseurl + "usuario/"+user.id, user );
      }
}