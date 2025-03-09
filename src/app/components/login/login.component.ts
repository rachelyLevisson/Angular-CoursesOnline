import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,RouterOutlet],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  flag : boolean = false;

  constructor(private router: Router, private authService: AuthService) {}

  send() {
    console.log('Login - Attempt with:', this.email);
    const credentials = { email: this.email, password: this.password };
    
    this.authService.login(credentials).subscribe({
      next: (response) => {
        console.log('Login - Response:', response);
        if (response.token) {
          console.log('Login - Token received, saving to localStorage');
          this.router.navigate(['/courses']);
        }
      },
      error: (error) => {
        console.error('Login - Error:', error);
        alert('Login failed. Please try again.');
      }
    });
  }
}
