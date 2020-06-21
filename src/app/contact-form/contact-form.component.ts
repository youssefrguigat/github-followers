import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  constructor() { }

  ContactMethods = [{id: 1, name:'email'}, {id: 2, name:'Telephone'}, {id: 3, name:'SMS'}];

  ngOnInit() {
  }

  log(x) {
    console.log(x);
  }

  submit(f) {
    console.log(f.value.contact.firstName);
  }

}
