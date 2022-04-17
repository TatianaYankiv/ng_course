import { Component, HostBinding } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import movies from './card/movie.json'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  movies = movies

  showAsList = !!localStorage.getItem('showAsList');

  @HostBinding('class.dark-theme')
  useDarkTheme = !!localStorage.getItem('useDarkTheme');

  onChange(val: MatSlideToggleChange) {
    this.showAsList = val.checked;

    if(this.showAsList) {
      localStorage.setItem('showAsList', 'true')
    } else {
      localStorage.removeItem('showAsList')
    }

  }
  onThemeChange(val: MatSlideToggleChange) {
    this.useDarkTheme = val.checked;

    if(this.showAsList) {
      localStorage.setItem('useDarkTheme', 'true')
    } else {
      localStorage.removeItem('useDarkTheme')
    }

  }
}
