import {Component, OnInit} from '@angular/core';
import {EventListService} from './event.component.service';
import { IEvent } from '../shared/event.models';
@Component({
  selector: 'event-list',
  templateUrl: 'eventlist.component.html'
})
export class EventListComponent implements OnInit {

  constructor(private eventService: EventListService) {
    console.log('Inside Constructor');
  }
  events: IEvent[];
  ngOnInit() {
    console.log('On Init');
    this.eventService.getEvents().subscribe(
      (events: IEvent[]) => this.events = events


    );
    // this.toastrService.callFailure("Hello", "India");
  }


  handleClickInParent(data) {
    console.log('Now Iam in parent: Have received :: ' + data);
  }
}
