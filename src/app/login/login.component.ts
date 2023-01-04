import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username : string | unknown
  password : string | unknown

  handleLogin() {

  }
  constructor(public router:Router) {
  }
}
