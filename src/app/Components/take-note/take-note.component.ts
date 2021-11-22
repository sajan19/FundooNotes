import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-take-note',
  templateUrl: './take-note.component.html',
  styleUrls: ['./take-note.component.scss']
})
export class TakeNoteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  displayImage: any = true;
  displayNoteCard: any = false;
 
  
  matCardCLick(){
    this.displayImage = false;
    this.displayNoteCard = true;
  }
  
  closeMatCard_2(){
    this.displayImage = true;
    this.displayNoteCard = false;
    
  }

}
