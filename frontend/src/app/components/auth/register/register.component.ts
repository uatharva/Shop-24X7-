import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  user: any;
  userAlreadyExistsError: boolean;
  constructor(private userService: UserService, private router: Router) {
    this.user = {};
  }

  ngOnInit(): void {}

  onRegister() {
    this.userService.register(this.user).subscribe(
      (res) => {
        this.router.navigate(['/login']);
      },
      (err) => {
        if (err.status === 400) {
          console.table(err);
        }
      }
    );
  }
}
