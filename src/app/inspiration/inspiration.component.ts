import { Component, OnInit } from '@angular/core';
import * as data from '../data/en_US.json';

@Component({
  selector: 'app-inspiration',
  templateUrl: './inspiration.component.html',
  styleUrls: ['./inspiration.component.css']
})
export class InspirationComponent implements OnInit {
  vediosrc = data["video-embed"];
  quote :any= data.quote;
  locations : any[] = data.locations;
  constructor() { }

  ngOnInit() {
  }

}
