import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
})
export class CardComponent {

  favoriteSeason: string;
  options: string[] = ['One', 'Two', 'Three'];

  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];
  isChecked: boolean = false;
  click = () => {
    this.isChecked ? (this.isChecked = false) : (this.isChecked = true);
  };
  choosenSeason = (season: string) => {
    this.favoriteSeason = season;
  };
}
