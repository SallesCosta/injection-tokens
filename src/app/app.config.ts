import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {enUsPlannerDays, ptBrPlannerDays} from './components/planner/types';

import {
  provideLanguage
} from './components/planner/planner.tokens';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),
  provideLanguage(ptBrPlannerDays)

  ]
};
