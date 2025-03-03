import { Component, Input, input } from '@angular/core';
import { CourseService } from '../../services/course.service';
import { Router, RouterOutlet } from '@angular/router';
import { CourseDetailsComponent } from '../course-details/course-details.component';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css',
})
export class CoursesComponent {
  allCours: any;

  constructor(private courssServise: CourseService, private router: Router) {
    this.allCours = this.courssServise.getCourses();
  }

  onDetails(id: number) {
    this.router.navigate(['/course-details']);
  }
}
