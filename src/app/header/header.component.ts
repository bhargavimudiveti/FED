import { Component, OnInit } from '@angular/core';
import {ViewEncapsulation} from '@angular/core';
import * as data from '../data/en_US.json';
import {TranslateService} from '@ngx-translate/core';
import { AppComponent } from '../app.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
   description = data.description;
   snippets:any [] = data.snippets;
  constructor( private translate: TranslateService, private app: AppComponent) {
    this.translate.use(this.app.lang);
   }

  ngOnInit() {

  }

}
