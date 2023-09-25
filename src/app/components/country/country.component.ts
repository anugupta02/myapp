import { Component, Input, OnInit } from '@angular/core';
import axios from 'axios';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css'],
})
export class CountryComponent implements OnInit {
  @Input() searchTerm: string = '';
  countries: any[] = [];
  loading: boolean = false;
  currentPage: number = 1;
  countriesPerPage: number = 8;

  constructor() {}

  ngOnInit(): void {
    this.fetchCountries();
  }

  fetchCountries() {
    const apiUrl = environment.apiUrl;
    this.loading = true;

    axios
      .get(apiUrl)
      .then((response) => {
        this.countries = response.data;
        this.loading = false;
      })
      .catch((error) => {
        console.error('Error fetching countries:', error);
        this.loading = false;
      });
  }

  getCurrencyNames(country: any): string {
    return country.currencies.map((currency: any) => currency.name).join(', ');
  }

  getLanguageNames(country: any): string {
    return country.languages.map((language: any) => language.name).join(', ');
  }

  getPaginatedCountries(): any[] {
    const filteredCountries = this.filterCountries();
    const startIndex = (this.currentPage - 1) * this.countriesPerPage;
    const endIndex = startIndex + this.countriesPerPage;
    return filteredCountries.slice(startIndex, endIndex);
  }

  filterCountries(): any[] {
    if (this.searchTerm.trim() === '') {
      return this.countries;
    }
    const searchTermLower = this.searchTerm.toLowerCase();
    return this.countries.filter((country: any) =>
      country.name.toLowerCase().includes(searchTermLower)
    );
  }

  nextPage() {
    const totalPages = this.getTotalPages();
    if (this.currentPage < totalPages) {
      this.currentPage++;
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  goToPage(pageNumber: number) {
    const totalPages = this.getTotalPages();
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      this.currentPage = pageNumber;
    }
  }

  getPaginationRange(): number[] {
    const totalPages = this.getTotalPages();
    return Array(totalPages)
      .fill(0)
      .map((_, index) => index + 1);
  }

  getTotalPages(): number {
    const filteredCountries = this.filterCountries();
    return Math.ceil(filteredCountries.length / this.countriesPerPage);
  }
}
