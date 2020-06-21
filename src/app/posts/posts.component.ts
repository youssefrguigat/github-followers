import { BadInput } from './../common/bad-input';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  status = true;
  posts: any[] = [];
  post = {
    id: 0,
    title: '',
    body: '',
    userId: 0
  };
  constructor(private postService: PostService) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.postService.getAll()
    .subscribe(
      posts => this.posts = posts, 
      error => {
      alert('Erreur inattendu!!!');
      console.log(error);
    })
  }

  createPost() {
    this.postService.create(this.post)
    .subscribe(
      newPost => {
        this.post.id = newPost.id;
        this.posts.unshift(this.post);
        this.post = {
          id: 0,
          title: '',
          body: '',
          userId: 0
        };
      }, (error: AppError) => {
        if(error instanceof BadInput){
          alert('Merci de vérifier vos informations !!!')
        }else{
          alert('Erreur inattendu!!!')
          console.log(error);
        }
      })
  }

  editPost(post){
    this.post = post;
    this.status = false;
  }

  updatePost() {
    this.postService.update(this.post)
      .subscribe(
        () => {
          this.post = {
            id: 0,
            title: '',
            body: '',
            userId: 0
          }
        this.status = true;
    })
  }

  deletePost(post) {
    this.postService.delete(post)
      .subscribe(
        () => {
          let index = this.posts.indexOf(post);
          this.posts.splice(index, 1);
        }, (error: AppError) => {
          if(error instanceof NotFoundError){
            alert('ce post est déjà supprimé!!!')
            console.log(error)
          }else{
            alert('Erreur inattendu!!!')
          }
        })
  }


}
