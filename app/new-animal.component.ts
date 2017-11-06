import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template: `
  <h1>New Animal</h1>
  <div>
    <label>Enter Animal Species: </label>
    <input #newSpecies><br>
    <label>Enter Animal Name: </label>
    <input #newName><br>
    <label>Enter Animal Age: </label>
    <input #newAge><br>
    <label>Enter Animal Diet: </label>
    <input #newDiet><br>
    <label>Enter Animal Location: </label>
    <input #newLocation><br>
    <label>Enter Animal number of Caretakers: </label>
    <input #newCaretakers><br>
    <label>Enter Animal Sex: </label>
    <input #newSex><br>
    <label>Enter Animal Likes: </label>
    <input #newLikes><br>
    <label>Enter Animal Dislikes: </label>
    <input #newDislikes><br>
  </div>
  <div>
    <button (click)="submitForm(newSpecies.value, newName.value, newAge.value, newDiet.value, newLocation.value, newCaretakers.value, newSex.value, newLikes.value, newDislikes.value); newDescription.value='';">Add</button>
  </div>
  `
})

export class NewAnimalComponent {
  @Output() newAnimalSender = new EventEmitter();

  submitForm(species: string, name: string, age: number, diet: string, location: string, caretakers: number, sex: string, likes: string, dislikes: string) {
    let newAnimalToAdd: Animal = new Animal(species, name, age, diet, location, caretakers, sex, likes, dislikes);
    this.newAnimalSender.emit(newAnimalToAdd);
  }
}
