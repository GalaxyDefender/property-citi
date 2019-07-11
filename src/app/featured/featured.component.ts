import { Component, OnInit } from '@angular/core';
import { Featured } from './featured.model';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.css']
})
export class FeaturedComponent implements OnInit {

  featured: Featured[] = [
    new Featured('R1,600,000', '2 Bedroom House For Sale in Jefferys Bay', '../../assets/img/property1.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
