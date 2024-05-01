import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RegisterComponent } from '../register/register.component';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { UserService } from '../user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, catchError, of, tap } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {


  email!:string;
  password!:string;

  login_form!: FormGroup;

  constructor(private fb: FormBuilder,public dialog: MatDialog, private http: HttpClient, private userService: UserService, private router: Router){
  }


  ngOnInit(): void {
    this.login_form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });

    this.getCsrfToken().subscribe();
  }

  getCsrfToken(): Observable<any> {
    return this.http.get<any>('http://localhost:8000/csrf-token');
  }


  /*getCsrfToken(): Observable<any> {
    return this.http.get<any>('http://localhost:8000/csrf-token').pipe(
      tap(response => {
        const csrfToken = response.csrf_token;
        localStorage.setItem('csrf_token', csrfToken);
        console.log('Token CSRF obtenido:', csrfToken);
      }),
      catchError(error => {
        console.error('Error al obtener el token CSRF:', error);
        return of(null);
      })
    );
  } */


  onSubmit(){
    if (this.login_form.valid) {
      this.userService.loginUser(this.login_form.value).subscribe(
        (response: HttpResponse<any>) => {
          console.log(response, "Se inició sesión con éxito");
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
}
