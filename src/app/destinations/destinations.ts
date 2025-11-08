import { Component } from '@angular/core';
import { HomeCard } from "../shared/home-card/home-card";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-destinations',
  imports: [HomeCard, CommonModule],
  templateUrl: './destinations.html',
  styleUrl: './destinations.css'
})
export class Destinations {
  public destinations = [
    {
      country: "Lebanon"
    },{
      country: "Cyprus"
    },{
      country: "Turkey"
    },{
      country: "Greece"
    },{
      country: "Italy"
    },{
      country: "Spain"
    },{
      country: "Ukraine"
    },{
      country: "Combos"
    }
  ]
}
