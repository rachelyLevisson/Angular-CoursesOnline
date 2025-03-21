import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../services/course.service';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { LessonService } from '../../services/lesson.service';

@Component({
  selector: 'app-course-details',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.css',
})
export class CourseDetailsComponent implements OnInit {
  detailCourse: any;
  listLessons: any;
  id: number = 0;
  role: any;
  userId: any = localStorage.getItem('userID');

  constructor(
    private coursService: CourseService,
    private lessonService: LessonService,
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
    this.loadLesson();
  }

  edit() {
    this.routerNavigate.navigate(['/editCourses', this.id]);
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

  enroll() {
    this.coursService.enrollCourse(this.id,this.userId).subscribe({
      next: (res) => {
        console.log('come to encoll');
        alert('the encoll do the succsess');
      },
      error: (e) => {
        if (e.status === 401) {
          alert('error!!!! dont delete');
        }
        if(e.status === 500){
          alert('you are already enrolled in this course');
        }
      },
    });
  }
  unroll() {
    this.coursService.unrollCourse(this.id,this.userId).subscribe({
      next: (res) => {
        alert('the uncoll do the succsess');
      },
      error: (e) => {
        if (e.status === 401) {
          alert('error!!!! dont delete');
        }
        if(e.status === 404){
          alert('Student not found in course');
        }
      },
    });
  }


  loadLesson(){
    this.lessonService.getLessons(this.id).subscribe({
      next: (res) => {
        this.listLessons = res;
      },
      error: (e) => {
        if (e.status === 401) {
          console.log('error!!!! 401 go to login????');
        }
      },
    });
  }
}

