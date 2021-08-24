import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  profile: any;
  user: any;
  updateAddress: boolean;

  constructor(private userService: UserService) {
    this.user = {};
    this.profile = {};
    this.updateAddress = false;
  }

  ngOnInit(): void {
    let id = localStorage.getItem('id').toString();
    //let id = '611ebcab5fd87f1fdb86637c';
    this.userService.getProfile(id).subscribe((res) => {
      this.profile = res['user'];
      console.log(JSON.stringify(res));
    });
  }

  editAddress() {
    this.updateAddress = true;
  }

  closeEdit() {
    this.updateAddress = false;
  }

  saveAddressChanges() {
    this.updateAddress = false;
    let id = localStorage.getItem('id').toString();
    this.userService.saveAddress(this.user, id).subscribe((res) => {
      console.log(JSON.stringify(res));
    });
  }
}
