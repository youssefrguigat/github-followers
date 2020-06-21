import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor() { }

  title = "Test your Knowledge";

  courses = ['Laravel', 'Symphony', 'angular', 'React'];

    getTitle() {
        return this.title;
    }


    getCourses() {
      return this.courses;
    }
  
}
