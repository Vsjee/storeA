import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SupabaseService } from 'src/app/services';
import { IFormData } from 'src/app/types';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss'],
})
export class SupportComponent {
  form = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
    ]),
    subject: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(30),
    ]),
    contentText: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(200),
    ]),
  });

  constructor(private supa: SupabaseService) {}

  handleSubmit(): void {
    if (this.form.valid) {
      const firstName = this.form.value.firstName;
      const lastName = this.form.value.lastName;
      const subject = this.form.value.subject;
      const contentText = this.form.value.contentText;

      if (
        firstName !== null &&
        firstName !== undefined &&
        lastName !== null &&
        lastName !== undefined &&
        subject !== null &&
        subject !== undefined &&
        contentText !== null &&
        contentText !== undefined
      ) {
        const data: IFormData = {
          firstName: firstName,
          lastName: lastName,
          subject: subject,
          contentText: contentText,
        };

        this.supa.insertData(data);
      }
    }
  }
}
