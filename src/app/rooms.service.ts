import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {
  info:any = [];
  load = false;

  constructor(private http: HttpClient) {
    console.log("Servicio corriendo");
  }

  getRooms(): Observable <any> {
    return this.http.get<any>('./assets/data/rooms.json');
  }

}
