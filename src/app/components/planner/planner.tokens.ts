import {FactoryProvider, InjectionToken} from '@angular/core';
import {enUsPlannerDays, PlannerDays, ptBrPlannerDays} from './types';

export const LANGUAGE_PLANNER = new InjectionToken<PlannerDays>('',
  {
    factory: () => enUsPlannerDays
  }
)


export const provideLanguage = (weekDays: PlannerDays): FactoryProvider => {
  return {
    provide: LANGUAGE_PLANNER,
    useFactory: () => weekDays
  }
}
