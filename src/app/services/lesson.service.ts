import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LessonService {
  private apiUrl = 'http://localhost:3000/api/courses/';
  private token: string | null = localStorage.getItem('auth_token');

  constructor(private http: HttpClient) { }


   getLessons(courseId: number): Observable<any> {
      const headers = this.createHeaders();
      return this.http.get(`${this.apiUrl}/${courseId}/lessons`, { headers });
    } 



   private createHeaders(): HttpHeaders {
      this.token = localStorage.getItem('auth_token');
      return new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      });
    }
}
