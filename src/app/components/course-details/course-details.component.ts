import { Component } from '@angular/core';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-course-details',
  standalone: true,
  imports: [],
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.css',
})
export class CourseDetailsComponent {
  detailCourse: any;
  id: number = 5

  constructor(private coursService: CourseService) {
    this.detailCourse = coursService.getCourseById(this.id)
  }
}
