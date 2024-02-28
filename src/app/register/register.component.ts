import { Component, OnInit } from '@angular/core';
import {Form, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit{

  constructor(private fb: FormBuilder) {}
  register_form!: FormGroup;


  ngOnInit(): void {


    this.register_form = this.fb.group ({
    name :['', [Validators.required, Validators.minLength(3)]],
    surname : ['', [Validators.required, Validators.minLength(3)]],
    email :['', [Validators.required, Validators.email]],
    telephone :['', [Validators.required, Validators.minLength(9), Validators.maxLength(9), Validators.pattern('^[0-9]*$')]],
    password :['',Validators.required, Validators.minLength(6)],
    confirm_password : ['', Validators.required, Validators.minLength(6)],
    });





  }
  onSubmit() {
    console.log(this.register_form.value);
  }



}
