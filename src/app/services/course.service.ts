// src/app/services/course.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private apiUrl = 'http://localhost:3000/api/courses';

  constructor(private http: HttpClient) { }

  getCourses() {
    return this.http.get(this.apiUrl);
  }

  getCourseById(id: number) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  createCourse(course: any) {
    return this.http.post(this.apiUrl, course);
  }

  updateCourse(id: number, course: any) {
    return this.http.put(`${this.apiUrl}/${id}`, course);
  }

  deleteCourse(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
