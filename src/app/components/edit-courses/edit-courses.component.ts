import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-edit-courses',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
  ],
  templateUrl: './edit-courses.component.html',
  styleUrl: './edit-courses.component.css',
})
export class EditCoursesComponent implements OnInit {
  courseForm: FormGroup;
  id: any;
  // detailCourse: any[] = [];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private courseService: CourseService,
    private route: ActivatedRoute
  ) {
    console.log('constructor');
    this.courseForm = this.fb.group({
      title: [''],
      description: [''],
      teacherId: this.id,
    });
  }

  ngOnInit(): void {
    console.log('ngOnInit');
    this.route.params.subscribe((p) => {
      this.id = +p['id'];
      console.log('after: ', this.id);
      this.courseService.getCourseById(this.id).subscribe({
        next: (res) => {
          this.courseForm.patchValue({
            title: res.title,
            description: res.description,
          });
        },
        error: (e) => {
          if (e.status === 401) {
            console.log('error!!!! 401 go to login????');
          }
        },
      });
    });
  }

  onSubmit(): void {
    if (this.courseForm.valid) {
      console.log('Course Data:', this.courseForm.value);
      this.courseForm.value.teacherId = this.id;
      this.courseService
        .updateCourse(this.id, this.courseForm.value)
        .subscribe({
          next: (res) => {
            alert('הפרטים נשמרו בהצלחה!!');
            this.router.navigate(['/courses']);
          },
          error: (e) => {
            console.log(e);
            alert('error!!! check this');
          },
        });
    }
  }
}
