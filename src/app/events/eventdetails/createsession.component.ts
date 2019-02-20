import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'create-session',
  templateUrl: 'createsession.component.html',
  styleUrls: ['createsession.component.css']
})
export class CreateSessionComponent implements OnInit {
  @Output() toggleAddMode = new EventEmitter();

  name: FormControl;
  presenter: FormControl;
  level: FormControl;
  duration: FormControl;
  abstract: FormControl;
  createSession: FormGroup;

  ngOnInit() {
    this.name = new FormControl();
    this.presenter = new FormControl();
    this.level = new FormControl();
    this.duration = new FormControl();
    this.abstract = new FormControl();

    this.createSession = new FormGroup({
      name: this.name,
      presenter: this.presenter,
      level: this.level,
      duration: this.duration,
      abstract: this.abstract
    });
  }

  toggleMode() {
    console.log('Toggling');
    this.toggleAddMode.emit();
  }

  createNewSession(value) {
    console.log(JSON.stringify(value));
  }
}
