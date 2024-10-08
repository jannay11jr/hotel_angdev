import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  sendContactForm(data: any): Observable<any> {
    return this.http.post('http://localhost:8000/api/contact', data);
  }}
