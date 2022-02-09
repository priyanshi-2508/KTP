import { Component, Input } from '@angular/core';
import element from  '../learning/json_data.json';
import container from '../learning/jsonData.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

@Input() name: string = "Hello JavaTpoint"; 

response = element;
a = this.response.rawMapping.Sleep.vkey;

result = container;


}   
