import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { faL } from '@fortawesome/free-solid-svg-icons';
import { response } from 'express';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  mainForm = this.fb.group({
    first: ['', Validators.required],
    last: ['', Validators.required],
    username: ['', Validators.required],
    password: ['', Validators.required],
  });
  submitted: boolean = false;
  constructor(
    private fb: FormBuilder,
    private registerService: RegisterService
  ) {}

  ngOnInit(): void {}
  onRegister() {
    let first = this.g_mainForm().first.value;
    let last = this.g_mainForm().last.value;
    let username = this.g_mainForm().username.value;
    let password = this.g_mainForm().password.value;
    if (!first || !last || !username || !password) {
      this.submitted = true;
      return;
    }
    this.registerService.register(first, username, password, last).subscribe({
      next: (res) => console.log(res),
      error: (err) => console.log(err),
    });
    this.submitted = false;
  }
  g_mainForm() {
    return this.mainForm.controls;
  }
}
