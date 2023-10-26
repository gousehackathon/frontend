import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent {
  constructor(private fb: FormBuilder) { }

  profileForm = this.fb.group({
    userName: ['', Validators.required],
    password: ['', Validators.required]
  });
  login() {
    // Add your login logic here
    console.log('Username:', this.profileForm.value.userName);
    console.log('Password:', this.profileForm.value.password);
  }
}
