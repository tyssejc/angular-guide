import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayText = false;
  log = [];

  onToggleDetails() {
    this.displayText = !this.displayText;
    // this.log.push(this.log.length + 1);
    this.log.push(new Date());
  }
}
