import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GitHubFollowersComponent } from './git-hub-followers/git-hub-followers.component';
import { PostsComponent } from './posts/posts.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfileFollowerComponent } from './profile-follower/profile-follower.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "followers", component: GitHubFollowersComponent },
  { path: "followers/:id/:login", component: ProfileFollowerComponent },
  { path: "posts", component: PostsComponent },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
