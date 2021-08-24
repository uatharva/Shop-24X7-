import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-order',
  templateUrl: './edit-order.component.html',
  styleUrls: ['./edit-order.component.css'],
})
export class EditOrderComponent implements OnInit {
  user: any;
  constructor() {
    this.user = {
      firstName: 'Test first name',
      lastName: 'Test last name',
      email: 'Test email',
      address: 'Test address',
      city: 'Test city',
      state: 'Test state',
      zipCode: 12345,
    };
  }

  ngOnInit(): void {}

  saveOrderChanges() {
    alert('Order changes saved!');
  }
}
