import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { API_BASE_URL } from './app.tokens';

export class ApplicationConfigBuilder {
    public static build(): ApplicationConfig {
        return {
            providers: [
                { provide: API_BASE_URL, useValue: "http://localhost:5168" },

                provideZoneChangeDetection({ eventCoalescing: true }),
                provideRouter(routes),
                provideHttpClient(),
            ]
        }
    }
}