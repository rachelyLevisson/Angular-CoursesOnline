import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule,RouterOutlet,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(private router: Router) {} // הזרקת Router

  userName: string = '';
  password: string = '';
  flag: boolean = false;

  send() {
    console.log(this.userName);
    console.log(this.password);
    this.router.navigate(['/courses']); // ניווט לקומפוננטה אחרת
    console.log("i");
    this.flag = true
    console.log("flag: ", this.flag);
    
  }
  
}
