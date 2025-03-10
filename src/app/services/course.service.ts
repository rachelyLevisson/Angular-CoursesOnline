import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private apiUrl = 'http://localhost:3000/api/courses';
  private token = localStorage.getItem('auth_token');


  constructor(private http: HttpClient) {}

  getCourses(): Observable<any> {
    // const token = localStorage.getItem('auth_token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });
    return this.http.get(this.apiUrl,{headers});
  }

  getCourseById(id: number): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });
    return this.http.get(`${this.apiUrl}/${id}`, {headers});
  }

  createCourse(course: any): Observable<any> {
    console.log("token hedaer: ", this.token);
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });
    console.log("here header....");
    
    return this.http.post(this.apiUrl, course,{headers});
  }

  updateCourse(id: number, course: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, course);
  }

  deleteCourse(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
