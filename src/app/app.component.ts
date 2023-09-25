import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myapp';
  selectedTheme: string = 'light';

  toggleTheme() {
    this.selectedTheme = this.selectedTheme === 'light' ? 'dark' : 'light';
  }
}
