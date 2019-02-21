import {Component} from '@angular/core';
import {EventListService} from '../event.component.service';
import {ActivatedRoute} from '@angular/router';
import { ISession } from '../../shared/event.models';

@Component({
  templateUrl: 'eventdetails.component.html',
  styles: [`
      .eventimage {height: 100px}
      button.active {background: #0994d9; color: white}
    `]
})
export class EventDetailComponent {
  addmode = false;
  event: any;
  filterby = 'all';
  sessions: ISession[];
  visibleSessions: ISession[];
    constructor(private eventListService: EventListService, private activatedRoute: ActivatedRoute) {}
    
    ngOnInit() {      
        this.activatedRoute.params.forEach((param) => {
        this.event = this.eventListService.getEvent(+param['id']);
        this.sessions = this.event.sessions;
        this.visibleSessions = this.sessions.slice(0);
        this.addmode =  false;
      })

      //this.event = this.eventListService.getEvent(+this.activatedRoute.snapshot.params['id']);
      
  }

  toggleMode() {
    console.log('Toggling finally');
    this.addmode = !this.addmode;
  }

  filterBy(value) {
    this.filterby = value;
    if (value == 'all') {
      this.visibleSessions = this.sessions.slice(0);
    } else {
      this.visibleSessions = this.sessions.slice(0).filter(session => session.level.toLowerCase() == value);
    }
  }

}
