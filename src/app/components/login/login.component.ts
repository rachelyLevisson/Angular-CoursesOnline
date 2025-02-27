import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterOutlet, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  userName: string = '';
  password: string = '';
  flag: boolean = false;
  user: any;

  constructor(private router: Router, private authService: AuthService) {} // הזרקת Router

  send() {
    console.log(this.userName);
    console.log(this.password);
    // this.user = this.authService.login({this.userName,this.password});

    this.router.navigate(['/courses']); // ניווט לקומפוננטה אחרת
    console.log('i');
    this.flag = true;
    console.log('flag: ', this.flag);
  }
}
