import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home-page',
  imports: [RouterOutlet],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  title = 'online-courses';
  constructor(private r : Router){}

  see() {
    this.title = 'Shabbat Shalom🥰✨';
    console.log("wow open");
    
  }

  open() {
    console.log("open login///....."); 
    this.title = "now open login";
    this.r.navigate(['/login']);
  }
}
