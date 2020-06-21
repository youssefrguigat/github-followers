import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'profile-follower',
  templateUrl: './profile-follower.component.html',
  styleUrls: ['./profile-follower.component.scss']
})
export class ProfileFollowerComponent implements OnInit {

  id: number;
  login: string;
  type: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = +params.get('id');
      this.login = params.get('login');
    })
    this.route.queryParamMap.subscribe(params => {
      console.log(params.get('val'));
    })
    this.type = this.route.snapshot.queryParamMap.get('page');
  }

}
