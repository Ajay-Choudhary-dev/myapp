import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient,withInterceptors } from '@angular/common/http';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { loggerInterceptor } from './components/interceptor/logger.interceptor';
import { authInterceptor } from './components/interceptor/auth.interceptor';
import { loadingInterceptor } from './components/interceptor/loading.interceptor';
import { errorInterceptor } from './components/interceptor/error.interceptor';
import { retryInterceptor } from './components/interceptor/retry.interceptor';


export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(
      withInterceptors([
        loggerInterceptor,
        authInterceptor,
        retryInterceptor,
        loadingInterceptor,
        errorInterceptor
      ]))
  ]
};

