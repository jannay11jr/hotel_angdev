import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isNavbarOpen = false;  

  starsArray = [1,2,3,4,5];

  constructor(private router: Router, public userService: UserService) {}

  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
  }
  onLogout(): void{
    this.userService.logout();
  }



}
