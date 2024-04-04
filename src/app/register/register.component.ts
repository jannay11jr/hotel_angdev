import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  register_form!: FormGroup;
  router: Router;
  constructor(private fb: FormBuilder, private http: HttpClient, private userService: UserService, _router: Router) {
    this.router = _router;
  }

  ngOnInit(): void {
    this.register_form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      surname: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      telephone: ['', [Validators.required, Validators.minLength(9), Validators.maxLength(9), Validators.pattern('^[0-9]*$')]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirm_password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {

    if (this.register_form.valid) {
      this.userService.createUser(this.register_form.value).subscribe(
        (response: HttpResponse<any>) => {
          this.router.navigate(['/successregister']);
          console.log(response);
        },
        (error: HttpErrorResponse) => {
          console.log(error);
        }
      );
    }
  }
}
