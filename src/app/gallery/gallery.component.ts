import { Component, OnInit } from '@angular/core';
import * as data from '../data/en_US.json';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
 images : any [] = data.gallery.map( a => a.src);
 srcval : any[] = data.gallery.map(a => a.text);
  constructor() { }

  ngOnInit() {

  }

}
