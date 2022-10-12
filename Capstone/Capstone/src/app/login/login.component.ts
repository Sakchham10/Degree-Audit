import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  mainForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });
  submitted: boolean = false;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  onLogin() {
    this.submitted = true;
    console.log('Logged In');
  }

  get gMainForm() {
    return this.mainForm.controls;
  }
}
