import {Component} from '@angular/core';
import {DataService} from "../service/data.service";

export class Animal {
  constructor(
    public id: number,
    public nickname: string,
    public animalType: string,
    public species: string,
    public age: number,
    public weight: number
  ) {
  }
}

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css']
})
export class AnimalListComponent {

  animals: Animal[] | any

  constructor(
    public service: DataService
  ) {
  }

  ngOnInit() {
    this.refreshPage()
  }

  refreshPage() {
    this.service.getAllAnimals().subscribe(
      response => {
        console.log(response)
        this.animals=response
    },error => {
        console.log("An error has occured in Animal List refresh page")
      })
  }

  deleteAnimal(id : number) {

  }

  updateAnimal(id : number) {

  }

  createAnimal() {

  }
}
