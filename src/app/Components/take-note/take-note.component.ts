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
  displayVideo_1: any = false;
  displayVideo_2: any = false;
  displayVideo_3: any = false;
  
  image1Click(){
    this.displayImage = false;
    this.displayVideo_1 = true;
  }
  
  closeVideo(){
    this.displayImage = true;
    this.displayVideo_1 = false;
  }

}
