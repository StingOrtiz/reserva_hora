import { Horas } from 'src/app/_models/horas';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../_models';


@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

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
        return this.http.post('http://localhost:3000/usuario', user);
    }
    crearHora(hora: Horas) {
        return this.http.post('http://localhost:3000/horas', hora);
    }
    obtenerUsuarioPorId(  id:number ){
        return this.http.get<User>( "http://localhost:3000/usuarios/"+id );
      }
    
    
       /**
       * Function para obtener todos los usurios del servidor.
       */
      obtenerTodosLosProfesores(){
        return this.http.get<User[]>( "http://localhost:3000/usuarios?tipo=PROFESOR" );
      }
      
       /**
       * Function para obtener todos los usurios del servidor.
       */
      obtenerUsuariosPorTipo( tipo:string ){
        return this.http.get<User[]>( "http://localhost:3000/usuarios?tipo=" + tipo );
      }
    
      /**
       * Function para crear un usuario en el servidor
       */
      editarUsuario( user:User ){
        return this.http.put( "http://localhost:3000/usuarios/"+user.id, user );
      }
}