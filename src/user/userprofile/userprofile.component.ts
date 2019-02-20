import { Component, OnInit, Inject } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TOASTR_TOKEN } from '../../app/shared/toastr.service';

@Component({
  templateUrl: 'userprofile.component.html',
  styleUrls: ['userprofile.component.css']
})
export class UserProfileComponent implements OnInit {
  firstName: FormControl;
  lastName: FormControl;
  profileForm: FormGroup;
  constructor(private auth: AuthService, private router: Router, @Inject(TOASTR_TOKEN) private toastr: any) {
    console.log('Inside Constructor');
  }

  ngOnInit() {
    console.log('Inside ngOnInit');
    this.firstName = new FormControl(this.auth.currentUser.firstName, [Validators.required, Validators.pattern('[a-zA-Z].*'), Validators.maxLength(10)]);
    this.lastName = new FormControl(this.auth.currentUser.lastName, [Validators.required, Validators.pattern('[a-zA-Z].*'), Validators.maxLength(5)]);
    this.profileForm = new FormGroup({
      firstName : this.firstName,
      lastName: this.lastName
    });
  }

  saveUpdate(formValues) {
    console.log('in Updating');
    if (this.profileForm.valid) {
      console.log('Updating');
      this.auth.updateCurrentUserDetails(formValues.firstName, formValues.lastName);
      this.toastr.success('details updated');
    }
  }
  cancleUpdate() {
    this.router.navigate(['/events']);
  }

  invalidFirstName() {

    console.log(this.firstName.invalid && this.firstName.touched);
    return this.firstName.invalid && this.firstName.touched;
  }

  invalidLastName() {
    return this.lastName.invalid && this.lastName.touched;
  }
}
