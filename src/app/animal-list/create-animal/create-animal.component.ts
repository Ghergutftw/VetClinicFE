import { Component } from '@angular/core';
import {Animal} from "../animal-list.component";
import {DataService} from "../../service/data.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-animal',
  templateUrl: './create-animal.component.html',
  styleUrls: ['./create-animal.component.css']
})
export class CreateAnimalComponent {

  createdAnimal !: Animal

  constructor(
    private service : DataService,
    private router: Router
  ) {
  }

  ngOnInit(){
    this.createdAnimal = new Animal(0, "", "", "", 0, 0)
  }

  createAnimal(animal: Animal) {
    console.log("Creating animal")
    console.log(animal.specie)
    this.createdAnimal.nickname = animal.nickname
    this.createdAnimal.animalType=animal.animalType
    this.createdAnimal.specie=animal.specie
    this.createdAnimal.age=animal.age
    this.createdAnimal.weight=animal.weight
    this.service.createAnimal(this.createdAnimal).subscribe(
      response =>{
        this.router.navigate(["/animals-list"])
      }
    )
  }
}
