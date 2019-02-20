import { Injectable } from '@angular/core';
import { CreateEventComponent } from './createevent.component';
import { CanDeactivate } from '@angular/router';

@Injectable()
export class CreateEventDeactivateGaurdService implements CanDeactivate<CreateEventComponent> {
  canDeactivate(component: CreateEventComponent) {
    console.log('This cant be deactivate');
    return window.confirm('Please dont go back');
  }
}
