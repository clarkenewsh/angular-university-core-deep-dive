import { Component, OnInit, Input, Output, EventEmitter, ContentChild, TemplateRef } from '@angular/core';
import { Course } from 'src/app/model/course';
import { CourseImageComponent } from '../course-image/course-image.component';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {

  @Input() course: Course;
  @Input() cardIndex: number;
  @Output() courseSelected = new EventEmitter<Course>();

  // Receive noImageTpl template as input variable
  @Input() noImageTpl: TemplateRef<any>

  // Content projection (ng-content using @viewChild & ViewChildren)
  @ContentChild(CourseImageComponent) image;

  constructor() { }

  ngOnInit(): void {
  }

  onCourseViewed() {
	console.log("card comp - button clicked")
	this.courseSelected.emit(this.course);
  }

  isImageVisible() {
	return this.course && this.course.iconUrl;
  }

  // add conditional styling to class - beginner courses apply alt style
  cardClasses() {
   if(this.course.category == 'BEGINNER') {
	  return 'beginner';
   }
  }

  // add conditional style to element
  cardStyles() {
	return {
	  'text-decoration': 'underline'
	}
  }
}

