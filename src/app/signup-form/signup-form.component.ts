import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsernameValidator } from './username.validator';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  form = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      UsernameValidator.cannotContainSpace
    ]),
    password: new FormControl('', Validators.required)
  })

  get username() {
    return this.form.get('username');
  }

  get password() {
    return this.form.get('password');
  }

}
