
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  bUserLogin:boolean= true;
  intUserID:number = -1;
  constructor() { }

  ngOnInit() {
  }
}
