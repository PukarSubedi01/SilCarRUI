import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Rohan Udas';
  names:string[]=["Rohan","Bishnu","Ashik","Raghu","Shreya","Pukar"];
  changename(){


    this.title = "Rohan"
  }
}
