import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model'

@Component({
  selector: 'animal-list',
  template:`
  <select (change)="onChange($event.target.value)">
    <option value="allAnimals" selected="selected">All Animals</option>
    <option value="youngAnimals">Young Animals</option>
    <option value="matureAnimals">Mature Animals</option>
  </select>
  <ul>
    <li *ngFor="let currentAnimal of childAnimalList | animalAge:filterByAnimalAge"> {{currentAnimal.name}}
      <br>
      <ul>
        <li>Species: {{currentAnimal.species}}</li>
        <li>Age: {{currentAnimal.age}}</li>
        <li>Diet: {{currentAnimal.diet}}</li>
        <li>Location: {{currentAnimal.location}}</li>
        <li>Caretakers: {{currentAnimal.caretakers}}</li>
        <li>Sex: {{currentAnimal.sex}}</li>
        <li>Likes: {{currentAnimal.likes}}</li>
        <li>Dislikes: {{currentAnimal.dislikes}}</li>
      </ul>
      <button class="btn" (click)="editAnimal(currentAnimal)">Edit Animal</button>
      <br><br>
    </li>
  </ul>
  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();
  filterByAnimalAge: string = "allAnimals";

   editAnimal(AnimalToEdit: Animal) {
     this.clickSender.emit(AnimalToEdit);
   }

   onChange(optionFromMenu) {
    this.filterByAnimalAge = optionFromMenu;
  }
}
