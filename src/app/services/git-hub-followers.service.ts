import { DataService } from './data.service';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})

export class GitHubFollowersService extends DataService {

  constructor(http: Http) {
    super('https://api.github.com/users/IDBRAHIMDEV/followers', http);
   }
}
