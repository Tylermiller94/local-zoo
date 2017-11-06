import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `
  <div>
    <div *ngIf="childSelectedAnimal">
      <h3>Edit Animal - {{childSelectedAnimal.name}}</h3>
      <label>Enter Animal Name:</label>
      <input [(ngModel)]="childSelectedAnimal.name"><br>
      <label>Enter Animal Age:</label>
      <input [(ngModel)]="childSelectedAnimal.age"><br>
      <label>Enter Animal Diet:</label>
      <input [(ngModel)]="childSelectedAnimal.diet"><br>
      <label>Enter Animal caretakers:</label>
      <input [(ngModel)]="childSelectedAnimal.caretakers"><br>
      <label>Enter Animal location:</label>
      <input [(ngModel)]="childSelectedAnimal.location"><br>
      <label>Enter Animal Likes:</label>
      <input [(ngModel)]="childSelectedAnimal.likes"><br>
      <label>Enter Animal Disikes:</label>
      <input [(ngModel)]="childSelectedAnimal.dislikes"><br>
      <button (click)="doneButtonClicked()">Done</button>
      <hr>
    </div>
  </div>
  `
})

export class EditAnimalComponent {
  @Input() childSelectedAnimal: Animal;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }
}
