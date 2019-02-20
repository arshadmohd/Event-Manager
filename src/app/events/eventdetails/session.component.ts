import {Component, Input} from '@angular/core';

@Component({
  selector: 'session',
  templateUrl: 'session.component.html',
  styleUrls: ['session.component.css']
})
export class SessionComponent {
  @Input() session: any;
}
