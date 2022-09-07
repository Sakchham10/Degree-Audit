import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  mainForm = this.fb.group({
    username: [''],
    password: [''],
  });
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private loginService: LoginService
  ) {}
  ngOnInit(): void {}

  onLogin() {
    let username = this.g_mainForm().username.value;
    let password = this.g_mainForm().password.value;
    this.loginService.login(username, password);
  }
  g_mainForm() {
    return this.mainForm.controls;
  }
}
