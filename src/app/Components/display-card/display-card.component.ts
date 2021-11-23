import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-card',
  templateUrl: './display-card.component.html',
  styleUrls: ['./display-card.component.scss']
})
export class DisplayCardComponent implements OnInit {
  cards: any;
  constructor() { }

  ngOnInit(): void {


  this.cards = [
    {title:"Welcome",
    description: "See you at Railway Station"},
    {title:"Welcome",
    description: "See you at Railway Station"},
    {title:"Welcome",
    description: "See you at Railway Station"},
    {title:"Welcome",
    description: "See you at Railway Station"},
    {title:"Welcome",
    description: "See you at Railway Station"}
  ]




}
}