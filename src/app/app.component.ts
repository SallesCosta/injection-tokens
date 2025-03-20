import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PlannerComponent } from "./components/planner/planner.component";
import {enUsPlannerDays, ptBrPlannerDays} from './components/planner/types';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PlannerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',

})
export class AppComponent {
  // weekDays = ptBrPlannerDays;
}
