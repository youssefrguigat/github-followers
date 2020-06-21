import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  courses;
  viewCourse = "React";
  show : boolean = true;
  personne = {
    name : 'youssef',
    mail : 'abc@gmail.com',
    adress : {
      city : 'Sale',
      sector : 'Tabriquet'
    }
  }
  post = {
    title: "lorem ipsum",
    body: "Proident excepteur ullamco pariatur dolore velit magna aute excepteur nisi enim id ea.",
    isFavorite: false
  }

  loadCourses() {
    this.courses = [
      {id: 1, title: "Laravel"},
      {id: 2, title: "Angular"}, 
      {id: 3, title: "React"}, 
      {id: 4, title: "Symfony"},
      {id: 5, title: "Node"},
    ];
  }

  trackCourse(index, course) {
    return course ? course.id : undefined;
  }
  onfavoriteChange(args) {
    console.log('Favorite is changed:', args);
  }

  addCourse() {
    this.courses.push({id: 6, title: 'Adonis'});
  }

  deleteCourse(course) {
    let index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }

  editCourse(course) {
    course.title = "UPDATE";
  }
}
