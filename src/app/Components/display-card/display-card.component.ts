import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-card',
  templateUrl: './display-card.component.html',
  styleUrls: ['./display-card.component.scss']
})
export class DisplayCardComponent implements OnInit {
  cards:any=Object;
  constructor() { }
// @Input (property) DisplayCardComponent.NotesArrayList:any
@Input() NotesArrayList:any
  ngOnInit(){


  // this.cards = [
  this.NotesArrayList = [
    {title:"Welcome",
    description: "ipsum dolor, sit amet consectetur adipisicing elit. Quis provident esse et, animi nulla, recusandae"},
    {title:"Notebook",
    description: "consectetur elit. Quis provident esse et, animi um qun"},
    {title:"Browser",
    description: "lor, sit amet consectetur adipisicing elit. Quis provident esse et, animi nulla, recusandae praesentium"},
    {title:"Google",
    description: "ipsum dolor, sit cing elit. Quis provident esse et, animi nulla, recusandae praesentium quway Station"},
    {title:"NotesApp",
    description: "Sipsum dolor, sit a recusandae praesentium quStation"},
    {title:"Cricket",
    description: "Sipsum dolor, sit a recusandae praesentium quStation"},
    {title:"Angular",
    description: "Sipsum dolor, sit a recusandae praesentium quStation"},
    {title:"Notes",
    description: "Sipsum dolor, sit a recusandae praesentium quStation"},
  ]

}
}