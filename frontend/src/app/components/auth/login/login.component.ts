import { Component, OnInit } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { UserService } from 'src/app/services/user/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user: any;
  invalidUserError: boolean;

  constructor(private userService: UserService, private router: Router) {
    this.user = {};
    this.invalidUserError = false;
    // remove this comment block below to test admin/user feature
    // localStorage.setItem(
    //   'user',
    //   JSON.stringify({
    //     username: 'ant',
    //     firstName: 'Anthony',
    //     lastName: 'Viera',
    //     password: '1234567',
    //     type: 'user',
    //   })
    // );
  }

  ngOnInit(): void {}

  onLogin() {
    this.userService.login(this.user).subscribe(
      (res) => {
        let decode: any = jwt_decode(res.token);
        this.invalidUserError = false;
        localStorage.setItem('user', decode.type);
        localStorage.setItem('id', decode._id);
        this.router.navigate(['/']);
        // alert(decode.firstName);
      },
      (err) => {
        if (err.status === 400) {
          this.invalidUserError = true;
        }
      }
    );
  }
}
