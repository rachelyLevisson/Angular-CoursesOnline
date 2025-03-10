import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../services/course.service';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-course-details',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.css',
})
export class CourseDetailsComponent implements OnInit {
  detailCourse: any;
  id: number = 0;
  role: any;
  constructor(
    private coursService: CourseService,
    private route: ActivatedRoute,
    private routerNavigate: Router
  ) {
    this.role = localStorage.getItem('user_role');
  }
  ngOnInit(): void {
    this.route.params.subscribe((p) => {
      this.id = +p['id'];
      console.log('after: ', this.id);
      this.coursService.getCourseById(this.id).subscribe({
        next: (res) => {
          this.detailCourse = res;
        },
        error: (e) => {
          if (e.status === 401) {
            console.log('error!!!! 401 go to login????');
          }
        },
      });
    });
  }

  edit() {
    this.routerNavigate.navigate(['/editCourses',this.id]);
  }

  deleteCourse() {
    this.coursService.deleteCourse(this.id).subscribe({
      next: (res) => {
        console.log('the delete do the succsess');
        alert('the delete do the succsess');
        this.routerNavigate.navigate(['/courses']);
      },
      error: (e) => {
        if (e.status === 401) {
          alert('error!!!! dont delete');
        }
      },
    });
  }
}
