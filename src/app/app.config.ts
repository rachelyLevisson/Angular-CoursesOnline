import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient, withInterceptors } from '@angular/common/http';

export const authInterceptor = (req: any, next: any) => {
  // Skip auth requests
  if (req.url.includes('/api/auth/')) {
    console.log('Interceptor - Skipping auth request:', req.url);
    console.log("✨😢☹️👏🏻");
    
    return next(req);
  }

  const token = localStorage.getItem('auth_token');
  console.log('Interceptor - Token:', token);

  if (token) {
    const authReq = req.clone({
      headers: req.headers.set('Authorization', token)
    });
    console.log('Interceptor - Headers:', authReq.headers.get('Authorization'));
    return next(authReq);
  }

  return next(req);
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideHttpClient(
      withInterceptors([authInterceptor])
    )
  ]
};
