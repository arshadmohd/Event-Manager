import { Injectable } from '@angular/core';
import { EventListService } from './event.component.service';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';

@Injectable()
export class EventDetailsGaurdService implements CanActivate {
  constructor(private eventListService: EventListService, private router: Router ) {}

  canActivate(route: ActivatedRouteSnapshot) {
    console.log(route.params['id']);
    const isExists = !!this.eventListService.getEvent(+route.params['id']);
    if (!isExists) {
      this.router.navigate(['/error']);
    }
    return isExists;
  }
}
