import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public hideMenu = false;

  showHide() {
    this.hideMenu = !this.hideMenu;
  }

  constructor() { }

  ngOnInit() {
  }

}
