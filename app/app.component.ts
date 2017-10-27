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
    </div>
  </div>
  `
})

export class AppComponent {

}
