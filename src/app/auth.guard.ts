import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private userService: UserService, private router: Router) {}

  canActivate(): boolean {
    if (this.userService.isAuth()) {
      return true; // Usuario autenticado, permite el acceso
    } else {
      this.router.navigate(['/home']);
      return false; // No permite el acceso
    }
  }
}
