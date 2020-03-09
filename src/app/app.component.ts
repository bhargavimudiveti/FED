import { Component } from '@angular/core';
// import * as data from "./../assets/i18n/en.json";
import {TranslateService} from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 public  lang:string;
  constructor(private translate: TranslateService) {
    this.lang = 'en';
    translate.setDefaultLang('en');
}
  useLanguage() {
   this.translate.use(this.lang);

}
}
