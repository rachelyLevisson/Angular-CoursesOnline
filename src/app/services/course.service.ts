import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private apiUrl = 'http://localhost:3000/api/courses';
  private token: string | null = localStorage.getItem('auth_token');

  constructor(private http: HttpClient) {}

  getCourses(): Observable<any> {
    const headers = this.createHeaders();
    return this.http.get(this.apiUrl, { headers });
  }

  getCourseById(id: number): Observable<any> {
    const headers = this.createHeaders();
    return this.http.get(`${this.apiUrl}/${id}`, { headers });
  }

  createCourse(course: any): Observable<any> {
    this.token = localStorage.getItem('auth_token'); // עדכן את ה-Token בכל פעם שקוראים לפונקציה
    if (!this.token) {
      return throwError('Token is missing'); // החזר שגיאה אם ה-Token חסר
    }

    const headers = this.createHeaders();
    return this.http.post(this.apiUrl, course, { headers });
  }

  updateCourse(id: number, course: any): Observable<any> {
    const headers = this.createHeaders();
    return this.http.put(`${this.apiUrl}/${id}`, course, { headers });
  }

  deleteCourse(id: number): Observable<any> {
    const headers = this.createHeaders();
    return this.http.delete(`${this.apiUrl}/${id}`, { headers });
  }

  enrollCourse(courseId: number, userId: number): Observable<any> {
    const headers = this.createHeaders();
    return this.http.post(`${this.apiUrl}/${courseId}/enroll`, {userId}, { headers });
  }

  unrollCourse(courseId: number, userId: number): Observable<any> {
    console.log('courseId:', courseId);
    console.log('userID:', userId);
    const headers = this.createHeaders();
    return this.http.delete(`${this.apiUrl}/${courseId}/unenroll`, {headers, body: { userId }});
  }

  private createHeaders(): HttpHeaders {
    this.token = localStorage.getItem('auth_token');
    return new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });
  }
}