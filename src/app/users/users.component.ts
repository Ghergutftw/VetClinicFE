import { Component } from '@angular/core';
import {DataService} from "../service/data.service";
import {Router} from "@angular/router";

export class User{
  constructor(
    public email : string,
    public password : string,
    public role : string
  ) {
  }

}
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  users : User[] | any

  constructor(public dataService:DataService,
              public router:Router) {
  }

  ngOnInit(){
     this.refreshPage()
  }

  refreshPage(){
    this.dataService.getAllUsers().subscribe(
      response =>{
        console.log(response)
        this.users = response
      },
      error => {
        console.log("An error has been made in USERS LIST")
      }
    )
  }

  updateUser(id : number) {
    console.log("UPDATING USER")
    this.router.navigate(["update-user" , id])
  }

  changeVisibility() {

  }
}
