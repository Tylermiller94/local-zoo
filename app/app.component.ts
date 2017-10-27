import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>local zoo</h1>
  <div class="container">
   <div class="animals">
     <div class="title">
       <span>species:</span>
       <span>name</span>
       <span>Age:</span>
       <span>Diet:</span>
       <span>Location</span>
       <span>Caretakers:</span>
       <span>Sex:</span>
       <span>Likes:</span>
       <span>Dislikes:</span>
     </div>
     <div *ngFor="let currentAnimal of animals">
       <span>{{species}}</span>
       <span>{{name}}</span>
       <span>{{age}}</span>
       <span>{{diet}}</span>
       <span>{{location}}</span>
       <span>{{caretakers}}</span>
       <span>{{sex:}}</span>
       <span>{{likes}}</span>
       <span>{{dislikes}}</span>
    </div>
  </div>
  `
})

export class AppComponent {
  zooName: string = "Local Zoo";
  animals: Animal[] = [
    new Animal("Arctic Fox", "Moon", 2, "Carnivore", "Northern Trail", 5, "Female", "Cool sahde", "Loud Noises" ),
    new Animal("Ocelot", "Prince", 4, "Carnivore", "Tropical Rain Forest Building", 6, "Male", "Lying in the sunshine", "Toys that are not rope-based"),
    new Animal("Northwest Black Tailed Deer", "Tinkerbell", 8, "Herbivore", "Northern Trail", 2, "Female", "Delicate roots and leaves", "Loud Noises"),

  ];





}
