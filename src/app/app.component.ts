import {Component} from '@angular/core';

@Component({
  selector: 'app-view',
  template: ` <nav-component></nav-component>
              <router-outlet></router-outlet>
              `
})
export class AppComponent {

}
