import { Component } from '@angular/core';
import {DataService} from "../service/data.service";
import {User} from "../users/users.component";
import {Router} from "@angular/router";
export class Doctor{
  constructor(
    public id: number,
    public firstName: string,
    public lastName: string,
    public speciality: string,
    public age: number,
    public yearsOfExperience: number,
    public user: User
  ){
  }

}

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css']
})
export class DoctorListComponent {

  doctors : Doctor[] | any;

  deleteMessage : string = '';

  constructor(
    public service:DataService,
    public router:Router

  ) {
  }
  ngOnInit(){
    this.refreshPage()
  }

  refreshPage(){
    this.service.getAllDoctors().subscribe(
      response=>{
        console.log(response);
        this.doctors = response
      },
      error => {
        console.log("An error has Occured in doctor refresh page")
      }
    )
  }

  deleteDoctor(id : number) {
    console.log(`Deleting doctor at ${id}`)
    this.service.deleteDoctorById(id).subscribe(response =>{
      console.log("Deleted successfully");
      this.deleteMessage = "DELETED SUCCESSFULLY"
      this.refreshPage();
      this.changeDeleteMessageInstantly()
    },error => {
      console.log("An error has occured at Delete docotor");
      this.deleteMessage = "AN ERROR HAS OCCURED"
    })
  }

  updateDoctor(id : number) {
    console.log(`Update Doctor id : ${id}`)
    this.router.navigate(['update-doctor',id])
  }

  createDoctor() {
    console.log("Create Doctor")
  }

  changeDeleteMessageInstantly(){
    setTimeout(() =>{
      this.deleteMessage = '';
    },2000)
  }
}
