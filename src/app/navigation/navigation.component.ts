import {Component} from '@angular/core';
import { AuthService } from '../../user/auth.service';
import { ISession } from '../shared/event.models';
import { EventListService } from '../events/event.component.service';

@Component({
  selector : 'nav-component',
  templateUrl: 'navigation.html'
})
export class NavigationComponent {
  private searchText: string = "";
  private matchingSessions : ISession[];
  constructor(private auth: AuthService, private eventListService : EventListService) {}

  searchSessions(){  

      console.log("Inside search Sessions"+this.searchText);
      this.eventListService.getMatchingSessions(this.searchText).subscribe((sessions)=>{
        this.matchingSessions = sessions;
        console.log(this.matchingSessions);
      })
  }


}
