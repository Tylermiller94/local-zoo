import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h2>KEG KING</h2>
    <h4>{{kegBrand}}</h4>
    <div class="kegs">
      <div class="title">
        <span>Name:</span>
        <span>Brand:</span>
        <span>Price:</span>
        <span>ABV:</span>
        <span>Pints Left:</span>
      </div>
      <div [class]="priorityColor(currentKeg)" (click)="isDone(currentKeg)" *ngFor="let currentKeg of kegs">
        <span>{{currentKeg.name}}</span>
        <span>{{currentKeg.brand}}</span>
        <span>\${{currentKeg.price}}</span>
        <span>\%{{currentKeg.alcoholContent}}</span>
        <span > {{currentKeg.pintsLeft}}</span>
        <button (click)="editKeg(currentKeg)">Edit</button>
        <button (click)="reducePintStock(currentKeg)">Reduce Pint Stock</button>
      </div>
      <div>
        <h3>{{selectedKeg.brand}}</h3>
        <p>Is this Keg empty?{{selectedKeg.done}}</p>
        <h3>Edit Keg</h3>

        <label>Enter Task Description:</label>
        <input [(ngModel)]="selectedKeg.brand">
        <br>
        <label>Enter Pints Left(1-124):</label>
        <input [(ngModel)]="selectedKeg.pintsLeft">
      </div>
    </div>
  `
})

export class AppComponent {
  kegBrand: string = "Pike Place Ale";
  kegs: Keg[] = [
    new Keg("Keg 1", "XXXXX Stout", 148, 7.54, 124),
    new Keg("Keg 2", "Kilt Lifter", 132, 9.87, 80),
    new Keg("Keg 3", "Hopped Honey", 116, 7.22, 9),
    new Keg("Keg 4", "Pumpkin Ale", 102, 6.31, 40)

  ];

  // selectedKeg = null;
  //switching to this syntax has the opposite of the desired effect hiding all of the list items and still showing the forms
  selectedKeg: Keg = this.kegs[0];


  editKeg(clickedKeg){
    this.selectedKeg = clickedKeg;
  }

  reducePintStock(clickedKeg: Keg){
    return clickedKeg.pintsLeft -= 1;
  }

  isDone(){

  }


  priorityColor(currentKeg){
    if (currentKeg.pintsLeft < 10 ){
      return "bg-danger";
    } else if (currentKeg.pintsLeft < 63){
      return "bg-warning";
    } else{
      return "bg-info";
    }
  }
}
// export class AppComponent {
//   kegBrand: string = "Pike Place Ale";
//   kegName: string = "XXXXX Stout";
//   kegPrice: number = 124
//   alcoholContent: number = 7.54
//   firstTask: Task = new Task("Weekend export class Task")
// }
export class Keg {
  // public done: boolean = false;
  constructor(public name: string, public brand: string, public price: number, public alcoholContent: number, public pintsLeft: number) {
  }
}


// export class Task {
//   public done: boolean = false;
//   constructor(public description: string) { }
// }
