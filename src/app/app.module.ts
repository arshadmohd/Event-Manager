import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {AppComponent} from '../app/app.component';
import { EventListComponent } from '../app/events/eventlist.component';
import { EventThumbnailComponent } from '../app/events/eventthumbnail.component';
import {EventListService} from '../app/events/event.component.service';
import {TOASTR_TOKEN} from '../app/shared/toastr.service';
import {JQ_TOKEN} from '../app/shared/jQuery.service';
import {SimpleModalComponent} from '../app/shared/simpleModal.component';
import {ModalTriggerDirective} from '../app/shared/modalTrigger.directive';
import {NavigationComponent} from '../app/navigation/navigation.component';
import {EventDetailComponent} from '../app/events/eventdetails/eventdetails.component';
import {SessionComponent} from '../app/events/eventdetails/session.component';
import {appRoutes} from './routes';
import { CreateEventComponent } from '../app/events/createevents/createevent.component';
import { ErrorComponent } from '../app/error/error.component';
import { EventDetailsGaurdService } from './events/eventlistgaurdservice.component';
import { CreateEventDeactivateGaurdService } from './events/createevents/createventdeactivategaurd.component.service';
import { UserModule } from '../user/user.module';
import { AuthService } from '../user/auth.service';
import { CreateSessionComponent } from '../app/events/eventdetails/createsession.component';
import { DurationPipe } from './shared/duration.pipe';


declare let toastr;
declare let jQuery;

@NgModule({
  declarations: [ModalTriggerDirective, AppComponent, SimpleModalComponent, CreateEventComponent, DurationPipe, CreateSessionComponent, ErrorComponent, EventListComponent, EventThumbnailComponent, NavigationComponent, SessionComponent, EventDetailComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    UserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [EventListService, {
    provide: TOASTR_TOKEN, useValue: toastr
    
  },{provide: JQ_TOKEN, useValue: jQuery},
    EventDetailsGaurdService, CreateEventDeactivateGaurdService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
