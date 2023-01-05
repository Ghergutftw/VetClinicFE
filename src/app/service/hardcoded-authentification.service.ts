import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthentificationService {
  constructor() { }

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
