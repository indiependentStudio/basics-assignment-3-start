import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  detailsHidden = true;
  buttonClickedCounters = [];

  toggleDetailsVisible() {
    this.detailsHidden = !this.detailsHidden;
    this.buttonClickedCounters.push(this.buttonClickedCounters.length + 1);
  }
}
