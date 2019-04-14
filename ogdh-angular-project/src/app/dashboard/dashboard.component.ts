import { Component, OnInit } from '@angular/core';
import ymaps from 'ymaps';

declare var ymaps:any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public hideMenu = false;
  public csvUrl = 'assets/map_data.csv';

  public map :any;

  public data = "ssssss";
  

  showHide() {
    this.hideMenu = !this.hideMenu;
  }

  constructor() {
    
   }

  ngOnInit() {
    ymaps.ready().then(() => {
      let mymap = new ymaps.Map('map', {
        center: [37.762126, -122.405813],
        zoom: 11
      });

      ymaps.modules.require(['Heatmap'], (Heatmap) => {
        let data = this.data,
  
        heatmap = new Heatmap(data);
  
        heatmap.setMap(mymap);
      });
    });
  }

}
