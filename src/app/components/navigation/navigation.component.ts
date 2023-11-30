import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDrawerMode } from '@angular/material/sidenav';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  events: string[] = [];
  opened: boolean;
  panelOpenState = false;

  toggle=()=>{
    this.opened?this.opened=false:this.opened=true
  }
}
