import { Component, OnInit } from '@angular/core';
//import map_data from '../../assets/map_data.json';
import ymaps from 'ymaps';

declare var ymaps: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public hideMenu = false;
  public csvUrl = 'assets/map_data.csv';

  public map: any;

  public data = [[40.213250, 44.507309],
   [40.217038, 44.478078],
   [40.181597, 44.498066],
   [40.148034, 44.515592],
   [40.186248, 44.574539],
   [40.152129, 44.473685],
   [40.183637, 44.449188],
   [39.853309, 44.690900],
   [39.956245, 44.549454],
   [40.066730, 44.452201],
   [39.910884, 44.717437],
   [40.292278, 44.352706],
   [40.598463, 44.365269],
   [40.388888, 43.886624],
   [40.637996, 44.224964],
   [39.693832, 45.459607],
   [39.840291, 45.670406],
   [39.763038, 45.332409],
   [40.170512, 44.292440],
   [40.145366, 44.112095],
   [40.147898, 44.036130],
   [40.181499, 43.914694],
   [40.359305, 45.127055],
   [40.170295, 45.734972],
   [40.599158, 45.350149],
   [40.326270, 45.144617],
   [40.167602, 45.577541],
   [40.146824, 45.264122],
   [40.547628, 44.959067],
   [40.158305, 45.468282],
   [40.147076, 45.297297],
   [40.169112, 45.198750],
   [40.614838, 43.968171],
   [40.575210, 43.868169],
   [40.780679, 43.892286],
   [40.952541, 43.787001],
   [40.795159, 43.849626],
   [39.501798, 46.340601],
   [39.201033, 46.398717],
   [39.149531, 46.160902],
   [38.887071, 46.262902],
   [39.520469, 46.018283],
   [39.442135, 46.123689],
   [39.495941, 45.972569],
   [39.682267, 45.759318],
   [39.571186, 45.939034],
   [39.382975, 46.247221],
   [40.741609, 44.868807],
   [40.882791, 45.146475],
   [40.987595, 45.151850],
   [40.848486, 45.161803],
   [41.132852, 45.123932],
   [41.187433, 44.905110],
   [41.189583, 44.979968],
   [41.180724, 45.001012],
   [40.827471, 45.544115],
   [40.845258, 45.462932],
   [40.985318, 45.365352],
   [40.942259, 45.439958],
   [40.905993, 45.492151],
   [40.886947, 45.389734],
   [40.804229, 44.484807],
   [41.009574, 44.387366],
   [40.168820, 44.514544],
   [40.819704, 44.236984],
   [41.191224, 44.232871],
   [40.831118, 44.109235],
   [41.096556, 44.644550],
   [40.402343, 44.633890],
   [40.542710, 44.770365],
   [40.314902, 44.595642],
   [40.183856, 44.499050],
   [40.373246, 44.595183],
   [40.117241, 44.726640],
   [40.299710, 44.582319],
   [40.274061, 44.638897],
    [40.213250, 44.507309],
    [40.217038, 44.478078],
    [40.181597, 44.498066],
    [40.148034, 44.515592],
    [40.186248, 44.574539],
    [40.152129, 44.473685],
    [40.183637, 44.449188],
    [39.853309, 44.690900],
    [39.956245, 44.549454],
    [40.066730, 44.452201],
    [39.910884, 44.717437],
    [40.292278, 44.352706],
    [40.598463, 44.365269],
    [40.388888, 43.886624],
    [40.637996, 44.224964],
    [39.693832, 45.459607],
    [39.840291, 45.670406],
    [39.763038, 45.332409],
    [40.170512, 44.292440],
    [40.145366, 44.112095],
    [40.147898, 44.036130],
    [40.181499, 43.914694],
    [40.359305, 45.127055],
    [40.170295, 45.734972],
    [40.599158, 45.350149],
    [40.326270, 45.144617],
    [40.167602, 45.577541],
    [40.146824, 45.264122],
    [40.547628, 44.959067],
    [40.158305, 45.468282],
    [40.147076, 45.297297],
    [40.169112, 45.198750],
    [40.614838, 43.968171],
    [40.575210, 43.868169],
    [40.780679, 43.892286],
    [40.952541, 43.787001],
    [40.795159, 43.849626],
    [39.501798, 46.340601],
    [39.201033, 46.398717],
    [39.149531, 46.160902],
    [38.887071, 46.262902],
    [39.520469, 46.018283],
    [39.442135, 46.123689],
    [39.495941, 45.972569],
    [39.682267, 45.759318],
    [39.571186, 45.939034],
    [39.382975, 46.247221],
    [40.741609, 44.868807],
    [40.882791, 45.146475],
    [40.987595, 45.151850],
    [40.848486, 45.161803],
    [41.132852, 45.123932],
    [41.187433, 44.905110],
    [41.189583, 44.979968],
    [41.180724, 45.001012],
    [40.827471, 45.544115],
    [40.845258, 45.462932],
    [40.985318, 45.365352],
    [40.942259, 45.439958],
    [40.905993, 45.492151],
    [40.886947, 45.389734],
    [40.804229, 44.484807],
    [41.009574, 44.387366],
    [40.168820, 44.514544],
    [40.819704, 44.236984],
    [41.191224, 44.232871],
    [40.831118, 44.109235],
    [41.096556, 44.644550],
    [40.402343, 44.633890],
    [40.542710, 44.770365],
    [40.314902, 44.595642],
    [40.183856, 44.499050],
    [40.373246, 44.595183],
    [40.117241, 44.726640],
    [40.299710, 44.582319],
    [40.274061, 44.638897]];


  showHide() {
    this.hideMenu = !this.hideMenu;
  }

  constructor() {
 //   console.log(map_data);
   // console.log('fs');
   }

  ngOnInit() {
    ymaps.ready().then(() => {
      const mymap = new ymaps.Map('map', {
        center: [40.217038, 44.478078],
        zoom: 8
      });

      ymaps.modules.require(['Heatmap'], (Heatmap) => {
        const data = this.data,
        heatmap = new Heatmap(data);
        heatmap.setMap(mymap);
      });
    });
  }

}
