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

  users : User[] | any

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

  // @ts-ignore
  existsInDb(username:string,password:string){
    for (let i = 0; i < this.users.length; i++) {
      if(password == this.users.at(i).password && username ==this.users.at(i).email){
        return true;
      }
    }

  }
}
