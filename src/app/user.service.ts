import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
    console.log('Servicio user corriendo');
   }

   createUser(userData:any): Observable<any>{
    return this.http.post('http://localhost:8000/api/users/create', userData);
   }

   loginUser(userData:any): Observable<any>{
    return this.http.post('http://localhost:8000/api/users/store', userData);
   }
}
