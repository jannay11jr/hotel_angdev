import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RegisterComponent } from '../register/register.component';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { UserService } from '../user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
  }


  onSubmit(){
    if (this.login_form.valid) {
      this.userService.loginUser(this.login_form.value).subscribe(
        (response: HttpResponse<any>) => {
          console.log(response, "Se inició sesión con éxito");
        },
        (error: HttpErrorResponse) => {
          console.log(error);
        }
      );
    }
  }
}
