import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

@Component({
    selector: 'courses',
    templateUrl: './courses.component.html',
})
export class CoursesComponent {

    title = "Test your Knowledge";
    isActive = false;

    courses;  
    image = "https://scontent-mad1-1.xx.fbcdn.net/v/t1.0-9/94515980_896791620784081_2059444450588884992_n.jpg?_nc_cat=103&_nc_sid=ca434c&_nc_eui2=AeG9khyhNC845Q5IpcvqPUwfhqLtJWHKHDKGou0lYcocMkeWEM-IORqwxfdt_sSfBqlFHfYbK4fQyDLecI06reUq&_nc_ohc=s-lLwJVZvLYAX-Mjsnq&_nc_ht=scontent-mad1-1.xx&oh=f99d12fb107cab1fa84f33e425a8ff19&oe=5ECC8BE2";

     
    constructor(coursesService: CoursesService) {
        this.courses = coursesService.getCourses();
    }

    course = {
        titre: 'Formation complète sur Angular',
        avis: '4.9762',
        participants: '136',
        prix: '950.38',
        publicationDate: new Date(2017, 11, 21)
    }

    onClick($event) {
        $event.stopPropagation();
        console.log('Button clicked');
    }

    username: string = "youssef rguigat";;
    

    onClickDiv() {
        console.log('Div clicked');
    }
        
}