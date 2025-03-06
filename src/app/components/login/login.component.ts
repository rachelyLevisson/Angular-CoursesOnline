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
    const credentials = { email: this.email, password: this.password };
    
    this.authService.login(credentials).subscribe({
      next: (response) => {
        if (response.token) {
          this.router.navigate(['/courses']);
        }
      },
      error: (error) => {
        alert('Login failed. Please try again.');
      }
    });
  }
}
