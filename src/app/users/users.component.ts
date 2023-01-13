import { Component } from '@angular/core';

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

}
