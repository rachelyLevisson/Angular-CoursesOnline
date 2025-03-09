import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home-page',
  imports: [RouterOutlet],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  constructor(private r : Router){}

  login() {
    this.r.navigate(['/login']);
  }

  signUp() {
    this.r.navigate(['/register']);
  }
}
