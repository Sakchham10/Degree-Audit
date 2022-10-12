import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}
  onRegister() {
    this.submitted = true;
    console.log('Resgiter Works');
  }
  get gMainForm() {
    return this.mainForm.controls;
  }
}
