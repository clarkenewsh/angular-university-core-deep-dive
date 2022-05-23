import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import {COURSES} from '../db-data';
import { CourseCardComponent } from './course-card/course-card.component';
import { Course } from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
 
  // Get courses array from data
  courses = COURSES;

  title = COURSES[0].description;
  price: number = 9.99;
  rate: number = 67;

  startDate = new Date(200, 0, 1);

  course = COURSES[0];

  // View Child Decorator - get reference of an instance of the CourseCardComponent (scope of viewChild is only within the component and not multiple levels down the component hierarchy)
  @ViewChild(CourseCardComponent) card: CourseCardComponent;

  // View Child Decorator using template ref variables  - get reference of an instance of the CourseCardComponent 
  @ViewChild('cardRef') card1: CourseCardComponent;

  // View Child Decorator - get html element in relation to the component reference object 
  @ViewChild('container') containerDiv: ElementRef;

  // View Child Decorator - get html element in relation to the html DOM element (not component)
  // @ViewChild('container', {read: ElementRef}) containerDiv: ElementRef;

  // ViewChildren Decorator - enables us to drill down & query into multiple components 
  @ViewChildren(CourseCardComponent) cards: QueryList<CourseCardComponent>;

  // ViewChildren Decorator - get html DOM element in relation to the html DOM element (not component)
  // @ViewChildren(CourseCardComponent, {read: ElementRef}) cards: QueryList<ElementRef>;
  
  constructor() {

  }

  // Lifecycle hook method to initialise some login when the component has initialised at its earliest point 
  // Using ViewChildren with the changes observables we can see when the state of the collection of components changes - i.e need course added
  ngAfterViewInit(): void {
    console.log("containerDiv", this.card1);

    // this.cards.changes.subscribe(
    //   cards => console.log(cards);
    // );
  }

  // edit course to demonstrate the changes to the @ViewChildren use case
  // onCourseEdited() {
  //   this.courses.push( 
  //       {
  //         id: 1,
  //         description: "Angular Core Deep Dive",
  //         iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-core-in-depth-small.png',
  //         longDescription: "A detailed walk-through of the most important part of Angular - the Core and Common modules",
  //         lessonsCount: 10
  //     }
  //   )
  // }

  // catch course payload as course param using the $event and Event emitter 
  onCourseSelected(course:Course) {
    console.log("app comp - click event bubbled", course);
    console.log(this.card);
    console.log(this.card1);
    console.log("containerDiv", this.containerDiv);
  }

}
