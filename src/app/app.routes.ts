import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CoursesComponent } from './components/courses/courses.component';
import { CourseDetailsComponent } from './components/course-details/course-details.component';
import { ManageCoursesComponent } from './components/manage-courses/manage-courses.component';
import { HomePageComponent } from './components/home-page/home-page.component';

export const routes: Routes = [
  // { path: '', redirectTo: '', pathMatch: 'full' },
  // { path: 'register', component: RegisterComponent },
  { path: '',component : HomePageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'courses/:id', component: CourseDetailsComponent },

  // {
  //   path: 'courses/:id',
  //   component: CourseDetailsComponent,
  // data: { prerender: true }, // מצביע על כך שהמסלול דורש פרה-רנדרינג
  // getPrerenderParams: () => {
  //   return [
  //     { id: 'course1' },
  //     { id: 'course2' },
  //     // הוסיפי כאן פרמטרים נוספים אם יש
  //   ];
  // }
  // },

  // { path: 'manage-courses', component: ManageCoursesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
