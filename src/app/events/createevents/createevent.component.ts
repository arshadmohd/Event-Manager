import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  templateUrl: 'createevent.component.html',
  styleUrls: ['createevent.component.css']
})
export class CreateEventComponent implements OnInit {
  constructor(private router: Router) {}

  name: FormControl;
  date: FormControl;
  time: FormControl;
  price: FormControl;

  createEvent: FormGroup;
  ngOnInit() {
    this.name = new FormControl('', Validators.required);
    this.date = new FormControl('', Validators.required);
    this.time = new FormControl('', Validators.required);
    this.price = new FormControl('', Validators.required);

    this.createEvent = new FormGroup({
      name: this.name,
      date: this.date,
      time: this.time,
      price: this.price
    });
  }

}
