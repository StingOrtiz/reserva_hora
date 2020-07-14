import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  baseurl = "https://reservahora-json-kbefbqorma-ue.a.run.app/"
  httpHeaders = new HttpHeaders({'Content': 'aplication/json'})

  constructor(private http: HttpClient) { }

  getAllclientes():Observable<any>{
    return this.http.get(this.baseurl + '/cliente',
     {headers: this.httpHeaders})
  }
}
