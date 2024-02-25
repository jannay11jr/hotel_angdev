import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RoomsService } from '../rooms.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {

  constructor(private roomsinfo: RoomsService) {}

  list_of_rooms!:any[];

  ngOnInit(): void {
    this.getRooms();
  }

  getRooms(): void {
    this.roomsinfo.getRooms()
    .subscribe(resp => {
      this.list_of_rooms = resp.rooms;
    })

  }
}
