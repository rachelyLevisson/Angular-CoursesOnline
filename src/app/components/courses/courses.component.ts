import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { CourseService } from '../../services/course.service';
import { Router, RouterOutlet } from '@angular/router';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent {
  allCours: any[] = [];

  constructor(
    private courseService: CourseService,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    if (isPlatformBrowser(this.platformId)) {
      this.loadCourses();
    }
  }

  loadCourses() {
    this.courseService.getCourses().subscribe({
      next: (response) => {
        console.log('good');
        this.allCours = response;
      },
      error: (error) => {
        if (error.status === 401) {
          console.log('error!!!! 401 go to login????');
        }
      },
    });
  }

  onDetails(id: number) {
    this.router.navigate(['/courses', id]);
  }

  id: number = 5;
  Add() {
    console.log('comeeeeeee');
    this.router.navigate(['/appManageCourses', this.id]);
  }
}
