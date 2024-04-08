import { HttpClient, HttpHeaders } from '@angular/common/http';
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

   loginUser(userData: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-XSRF-TOKEN': this.getCookieValue('XSRF-TOKEN')
    });
    const requestOptions = { headers: headers };
    return this.http.post('http://localhost:8000/api/users/store', userData, requestOptions);
  }

  private getCookieValue(name: string): string {
    const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    if (match) return match[2];
    return '';
  }


}
