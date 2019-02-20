import {Component, Input, EventEmitter, Output} from '@angular/core';
@Component({
  selector: 'event-thumbnail',
  templateUrl: 'eventthumbnail.component.html',
  styleUrls: ['eventlist.component.css']
})
export class EventThumbnailComponent {
  @Input() event: any;
  @Output() clickEvent =  new EventEmitter();

  handleClickMe() {
    console.log('button clicked, will pass the event name to parent');
    this.clickEvent.emit(this.event.name);
  }
}
