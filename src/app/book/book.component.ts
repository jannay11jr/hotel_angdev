import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RoomsService } from '../rooms.service';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  name_of_rooms: any[] = [];
  selectedRoom: string = '';
  startDate: string = '';
  endDate: string = '';
  whatsappPhoneNumber: string = '677777777';  // Número de teléfono para WhatsApp

  constructor(private roomsinfo: RoomsService) {}

  ngOnInit(): void {
    this.getRooms();
  }

  getRooms(): void {
    this.roomsinfo.getRooms()
      .subscribe(resp => {
        this.name_of_rooms = resp.rooms;
      });
  }

  sendWhatsAppMessage(): void {
    if (this.selectedRoom && this.startDate && this.endDate) {
      const message = `Buenos días, me gustaría reservar la habitación ${this.selectedRoom} para las fechas del ${this.startDate} al ${this.endDate}. ¿Me podría decir si está disponible y de qué forma podemos gestionarlo?`;
      const whatsappURL = `https://wa.me/${this.whatsappPhoneNumber}?text=${encodeURIComponent(message)}`;

      window.open(whatsappURL, '_blank');
    } else {
      alert('Por favor, seleccione una habitación y un rango de fechas.');
    }
  }
}
