import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

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

   loginUser(credentials: any): Observable<any> {
    return this.http.post('http://localhost:8000/api/users/store', credentials).pipe(
      tap((response:any) => {
        if(response && response.token) {
          sessionStorage.setItem('token', response.token);
      }
    })
    );
  }

  getCsrfToken(): Observable<any> {
    return this.http.get<any>('http://localhost:8000/csrf-token');
  }

  isAuth(): boolean {
    return !!sessionStorage.getItem('token')  }

  logout(): void {
    sessionStorage.removeItem('token');
    sessionStorage.clear();
  }
}
