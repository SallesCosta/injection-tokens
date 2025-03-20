import {Component, inject, Inject, Input, input} from '@angular/core';
// import {enUsPlannerDays, PlannerDays, ptBrPlannerDays} from './types';
import {LANGUAGE_PLANNER} from './planner.tokens';

@Component({
  selector: 'app-planner',
  imports: [],
  templateUrl: './planner.component.html',
  styleUrl: './planner.component.scss',

})
export class PlannerComponent {
  protected weekDays = inject(LANGUAGE_PLANNER)
  // constructor(@Inject(LANGUAGE_PLANNER) protected weekDays: PlannerDays) {
  // }
}
