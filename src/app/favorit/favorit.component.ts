import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorit.component.html',
  styleUrls: ['./favorit.component.scss']
})
export class FavoritComponent implements OnInit {

  @Input('is-favorite') favorite: boolean = false;
  @Output() clik = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.favorite = !this.favorite;
    this.clik.emit({newState: this.favorite});
  }

}
