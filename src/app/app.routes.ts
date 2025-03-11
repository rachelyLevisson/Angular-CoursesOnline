import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseDetailsComponent } from './component/course-details/course-details.component';
import { CoursesComponent } from './component/courses/courses.component';
import { EditCoursesComponent } from './component/edit-courses/edit-courses.component';
import { HomePageComponent } from './component/home-page/home-page.component';
import { LoginComponent } from './component/login/login.component';
import { ManageCoursesComponent } from './component/manage-courses/manage-courses.component';
import { RegisterComponent } from './component/register/register.component';

export const routes: Routes = [
  { path: '',component : HomePageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'courses/:id', component: CourseDetailsComponent},
  { path: 'appManageCourses/:id', component: ManageCoursesComponent},
  { path: 'editCourses/:id', component: EditCoursesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
