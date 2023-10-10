import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CalendarViewComponent } from './calendar/container-components/calendar-view/calendar-view.component';
import { TimelineViewComponent } from './timeline/container-components/timeline-view/timeline-view.component';

const routes: Routes = [
    { path: '', redirectTo: '/calendar-view', pathMatch: 'full' },
    { path: 'calendar-view', component: CalendarViewComponent},
    { path: 'timeline-view', component: TimelineViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
