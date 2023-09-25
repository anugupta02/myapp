import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  searchTerm: string = '';
  selectedTheme: string = 'light';
  themeTitle: string = 'Light';

  searchCountries() {
    if (this.searchTerm.trim() !== '') {
      console.log('Search term:', this.searchTerm);
    } else {
      console.log('Empty search term');
    }
  }

  toggleTheme() {
    this.selectedTheme = this.selectedTheme === 'light' ? 'dark' : 'light';
    this.themeTitle = this.selectedTheme === 'dark' ? 'Dark' : 'Light';
  }
}
