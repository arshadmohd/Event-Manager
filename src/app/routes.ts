import { Routes } from '@angular/router';
import { EventListComponent } from '../app/events/eventlist.component';
import { EventDetailComponent } from '../app/events/eventdetails/eventdetails.component';
import {CreateEventComponent} from '../app/events/createevents/createevent.component';
import { EventDetailsGaurdService } from './events/eventlistgaurdservice.component';
import { ErrorComponent } from './error/error.component';
import { CreateEventDeactivateGaurdService } from './events/createevents/createventdeactivategaurd.component.service';

export const appRoutes: Routes = [
  { path: 'event/new', component: CreateEventComponent, canDeactivate: [CreateEventDeactivateGaurdService] },
  { path: 'events', component: EventListComponent },
  { path: 'error', component: ErrorComponent },
  { path: 'event/:id', component: EventDetailComponent, canActivate: [EventDetailsGaurdService] },
  {path: '', redirectTo: '/events', pathMatch: 'full'}
];
