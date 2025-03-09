import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  ReactiveFormsModule,
  FormControl,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { title } from 'process';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

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
    private httpAuth: AuthService,
    private router: Router
  ) {
    this.courseForm = this.fb.group({
      title: [''],
      description: [''],
      teacherId: [''],
    });
  }

  // ngOnInit(): void {}

  onSubmit(): void {
    if (this.courseForm.valid) {
      console.log('Course Data:', this.courseForm.value);
      // כאן תוכל להוסיף את הקוד לשליחה לשרת
    }
  }
}
