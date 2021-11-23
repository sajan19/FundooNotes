import { Component, OnInit } from '@angular/core';
import { NoteServiceService } from 'src/app/Services/noteService/note-service.service';

@Component({
  selector: 'app-take-note',
  templateUrl: './take-note.component.html',
  styleUrls: ['./take-note.component.scss']
})
export class TakeNoteComponent implements OnInit {

  constructor(private noteService:NoteServiceService) { }





  ngOnInit(): void {
  }
  displayImage: any = true;
  displayNoteCard: any = false;
 
  
  matCardCLick(){
    this.displayImage = false;
    this.displayNoteCard = true;
  }
  
  closeMatCard_2(){
    let title:any
    // let data={'title':'This is First Note', 'description':'This is First Note Description'}
    let data={'title':'{{title}}', 'description':'{{description}}'}
    // let data={'title':{{this.title}}, 'description':{{description}}}
    this.noteService.createNote(data).subscribe((respone:any) => {
      console.log(respone);
    },err => {console.log(err)} )
    this.displayImage = true;
    this.displayNoteCard = false;

    
  }

}
