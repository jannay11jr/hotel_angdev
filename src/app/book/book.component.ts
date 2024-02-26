import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RoomsService } from '../rooms.service';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  constructor(private roomsinfo: RoomsService) {}

  name_of_rooms!: any [];

  ngOnInit(): void{
    this.getRooms();
  }

    getRooms(): void {
    this.roomsinfo.getRooms()
    .subscribe(resp => {
      this.name_of_rooms = resp.rooms;
      console.log(resp.rooms);
    })
  }
}
