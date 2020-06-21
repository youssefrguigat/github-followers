import { BadInput } from './../common/bad-input';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators'


export class DataService {

  constructor(private url: string, private http: Http) { }

  getAll() {
    return this.http.get(this.url).pipe(
                map(response => response.json())
                ,catchError(this.handleError))
  }

  create(resource) {
    return this.http.post(this.url, resource).pipe(
                map(response => response.json())
                ,catchError(this.handleError))
  }

  update(resource) {
    return this.http.put(this.url+'/'+resource.id, resource).pipe(
                map(response => response.json())
                ,catchError(this.handleError))
  }

  delete(resource) {
    return this.http.delete(this.url+'/'+resource.id).pipe(
                map(response => response.json())
                ,catchError(this.handleError))
  }

  private handleError(error: Response){
    if(error.status === 404) {
      return Observable.throw(new NotFoundError);
    }
    if(error.status === 400) {
      return Observable.throw(new BadInput);
    }
    return Observable.throw(new AppError);
  }
}
