import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { MyErrorStateMatcher } from './error.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  matcher = new MyErrorStateMatcher();
  favoriteSeason: string;
  options: string[] = ['One', 'Two', 'Three'];

  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];
isChecked:boolean=false;
click=()=>{
  this.isChecked?this.isChecked=false:this.isChecked=true
}
choosenSeason =(season:string)=>{
this.favoriteSeason=season
}
}

