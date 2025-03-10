import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-manage-courses',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
  ],
  templateUrl: './manage-courses.component.html',
  styleUrl: './manage-courses.component.css',
})
export class ManageCoursesComponent {
  courseForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private courseService: CourseService
  ) {
    console.log("userID: ", localStorage.getItem('userID'));
    
    this.courseForm = this.fb.group({
      title: [''],
      description: [''],
      teacherId: localStorage.getItem('userID'),
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.courseForm.valid) {
      console.log('Course Data:', this.courseForm.value);
      this.courseService.createCourse(this.courseForm.value).subscribe({
        next: (res) => {
          alert('הפרטים נשמרו בהצלחה!!');
          this.router.navigate(['/courses']);
        },
        error: (e) => {
          console.log(e);
          alert('error!!! check this');
        }
      });
    }
  }
}
