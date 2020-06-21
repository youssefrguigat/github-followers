import { GitHubFollowersService } from './../services/git-hub-followers.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'githubFollowers',
  templateUrl: './git-hub-followers.component.html',
  styleUrls: ['./git-hub-followers.component.scss']
})
export class GitHubFollowersComponent implements OnInit {

  followers: any[] = [];
  follower = {
    id: 0,
    login: '',
    avatar_url: '',
    html_url: ''
  };

  constructor(private githubfollowersService: GitHubFollowersService) { }

  ngOnInit() {
    this.getFollowers();
  }

  getFollowers() {
    this.githubfollowersService.getAll()
    .subscribe(
      followers => this.followers = followers, 
      error => {
      alert('Erreur inattendu!!!');
      console.log(error);
    })
  }

}
