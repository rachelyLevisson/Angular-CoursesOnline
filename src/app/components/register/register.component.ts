import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { AuthService } from '../../services/auth.service';
import { Router, RouterOutlet } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    RouterOutlet,
    MatCardModule
  ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registrationForm: FormGroup;
  selectedOption = new FormControl();
  options = ['אפשרות 1', 'אפשרות 2', 'אפשרות 3'];

  constructor(private fb: FormBuilder, private httpAuth : AuthService, private router : Router) {
    this.registrationForm = this.fb.group({
      name: [''],
      email: [''],
      password: [''],
      role: ['']
    });
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      console.log('Form Submitted!', this.registrationForm.value);
     this.httpAuth.register(this.fb).subscribe({
      next: (res) => {
        alert("הפרטים נשמרו בהצלחה!!");
        this.router.navigate(['/courses'])
      },
      error: (e) => {
        console.log(e);
        alert("error!!! check this")
      }
     })
      
    }
  }
}