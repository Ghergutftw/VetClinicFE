import { Injectable } from '@angular/core';
import {DataService} from "./data.service";
import {User} from "../users/users.component";

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthentificationService {
  constructor(
    public service:DataService
  ) { }

  users !: User[]

  ngOnInit(){
    this.users = [];
    this.service.getAllUsers().subscribe(
      value => {
        console.log(value)
        this.users = value;
      }

    )
  }

  authentificate(username: string | undefined, password: string | undefined){
    if(username == "test" && password == "test"){
      sessionStorage.setItem('Authenticated User' , username)
        return true;
    }else {
      return false;
    }
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem("Authenticated User")
    return !(user ===null);
  }

  logOut(){
    sessionStorage.removeItem("Authenticated User")
  }
}
