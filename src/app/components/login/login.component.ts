// import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { HttpClient, provideHttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterOutlet],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  flag: boolean = false;
  user: any;
  credentials: any;
  constructor(private router: Router, private authService: AuthService) {} // הזרקת Router

  send() {
    console.log(this.email);
    console.log(this.password);
    this.credentials = { email: this.email, password: this.password };
    this.user = this.authService.login(this.credentials);
    if (this.user) {
      alert('succsess!!!');
      this.router.navigate(['/courses']); // ניווט לקומפוננטה אחרת
    } else alert('no bad!!!');
    console.log('i');
    this.flag = true;
    console.log('flag: ', this.flag);
  }
}
