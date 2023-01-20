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

  users !: User[] ;

  canLogin!: boolean;
  ngOnInit(){
    this.users = [];
  }

  authentificate(username: string | undefined, password: string | undefined){
    // this.service.getAllUsers().subscribe(
    //   value => {
    //     this.users = value;
    //     console.log(this.users)
    //   }
    // )

    if(username == "test" && password == "test"){
      sessionStorage.setItem('Authenticated User' , username)
        return true;
    }else {
      return false;
    }
    // this.users.forEach(value => {
    //   if(value.password == password && password == value.password){
    //     console.log("CAPABIL DE LOGARE")
    //     this.canLogin = true;
    //   }
    // })
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
      // @ts-ignore
      if(password == this.users.at(i).password && username ==this.users.at(i).email){
        return true;
      }
    }

  }
}
