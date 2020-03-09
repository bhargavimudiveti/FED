import { Component, OnInit } from '@angular/core';
import * as data from '../data/en_US.json';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.css']
})
export class EpisodesComponent implements OnInit {
episodes:any[];
selectedValue : number;
isAscending: boolean = false;
  constructor() {
    this.selectedValue = 1;
  }

  ngOnInit() {
    this.seasonchange();
  }
  seasonchange(){
this.episodes = data["episode-list"].filter(item => item.season == this.selectedValue);
  }
  sortBy(){
    this.isAscending = !this.isAscending;
      this.episodes = this.episodes.sort((a, b) => {
         if (this.isAscending) {
          return a.rating - b.rating;
        }
        else
        return b.rating - a.rating;
       });
      }
}
