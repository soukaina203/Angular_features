import { Component } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';


import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { RouterModule, Routes } from '@angular/router';
import { MatTooltipModule } from '@angular/material/tooltip';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  standalone: true,
  imports: [MatExpansionModule
    , MatSidenavModule
    , MatIconModule,
    FormsModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    RouterModule,
    MatTooltipModule,
    MatMenuModule
  ],

})
export class SidebarComponent {
  events: string[] = [];
  opened: boolean;
  panelOpenState = false;

  toggle = () => {
    this.opened ? this.opened = false : this.opened = true
  }
}
