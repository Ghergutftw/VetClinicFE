import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {delay, timeout} from "rxjs";
import {HardcodedAuthentificationService} from "../service/hardcoded-authentification.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username : string  | undefined
  password : string | undefined
  invalidLogin : boolean | unknown
  ERROR_MESSAGE = "Wrong password or username!"

  constructor( public router : Router ,
               public hardcodedAuthentificationService: HardcodedAuthentificationService) {
  }

  handleLogin() {
    console.log(`Username : ${this.username}`)
    console.log(`Password : ${this.password}`)
    if(this.hardcodedAuthentificationService.authentificate(this.username,this.password)){
      this.invalidLogin = false;
      this.router.navigate(['/welcome'])
    }else{
      this.invalidLogin = true;
    }
  }
  close() {
    this.invalidLogin = false
  }

  LogSomething() {
    console.log("SOMETHING")
  }
}
