import { Component} from '@angular/core';
import { RoomsService } from './rooms.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  listofrooms: any = [];

  constructor(public roomsinfo: RoomsService) {}
}
