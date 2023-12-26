import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
   lat = 18.4484969;
   lng = 79.121254;
  mapCenter = { lat:18.4484969, lng:79.121254 }; 
  mapZoom = 15; 


}
