import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Route, Router} from "@angular/router";
import {DataService} from "../../service/data.service";
import {User} from "../users.component";

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit{

  id!: number

  decodedPassword!:string;

  user!: User
  constructor(
    public route: ActivatedRoute,
    public service:DataService,
    public router:Router
  ) {
  }

  ngOnInit(): void {
    this.user = new User("", "", "")
    this.id = this.route.snapshot.params["id"]
    this.service.retrieveUserById(this.id).subscribe(
      response=>{
        console.log(response)
        this.user = response;
      }
    )
    this.service.getDecodedString(this.user.password).subscribe(
      response=>{
        console.log(response)
      }
    )
  }

  updateUser(id:number) {
    console.log("updating")
    this.service.updateUserById(id,this.user).subscribe(
      response=>{
        this.router.navigate(["/users-list"])
      }
    )
  }

}
