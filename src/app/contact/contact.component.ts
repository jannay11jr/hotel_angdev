import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
    contactForm: FormGroup;

    constructor(private fb: FormBuilder, private contactService: ContactService) {
      this.contactForm = this.fb.group({
        tlf: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        name: ['', Validators.required],
        subject: ['', Validators.required],
        description: ['', Validators.required],
        validate_human: [false, Validators.requiredTrue]
      });
    }

    onSubmit() {
      if (this.contactForm.valid) {
        const formData = this.contactForm.value;
        this.contactService.sendContactForm(formData).subscribe(
          response => {
            console.log('Formulario enviado', response);
          },
          error => {
            console.error('Error enviando formulario', error);
          }
        );
      }
    }
  }
