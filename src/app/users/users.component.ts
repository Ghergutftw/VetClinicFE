import { Component } from '@angular/core';

export class User{
  constructor(
    private email : string,
    private password : string
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
