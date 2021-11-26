import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NoteServiceService } from 'src/app/Services/noteService/note-service.service';
import { ActivatedRoute } from '@angular/router';
import { TrashComponent } from '../trash/trash.component';
import { ArchiveComponent } from '../archive/archive.component';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  isTrashComponent:boolean = false;
  isArchive:boolean = false;
  @Input() noteCard: any
  note: any
  @Output() iconstodisplay = new EventEmitter<string>();
  constructor(private NoteServiceService: NoteServiceService,private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let com = this.activatedRoute.snapshot.component;

    if (com == TrashComponent) {
      this.isTrashComponent = true;
      console.log(this.isTrashComponent);
    }

    if (com == ArchiveComponent) {
      this.isArchive = true;
      console.log(this.isArchive);
    }

  }
 deleteNote(){
    console.log("Note is deleted",this.noteCard);
    
      let req = {
      noteIdList: [this.noteCard.id],
      isDeleted: false,
    }
    this.NoteServiceService.deleteNoteService(req).subscribe((response: any) =>{
      console.log(response);

      this.iconstodisplay.emit(response)
      
    },error =>{
      console.log(error); 
    })
   }
   getTrash(){
    console.log("Note is trash",this.noteCard);
    
      let req = {
      noteIdList: [this.noteCard.id],
      isDeleted: true,
    }
    this.NoteServiceService.trashNoteService(req).subscribe((response: any) =>{
      console.log("Succefully deleted",response);

      this.iconstodisplay.emit(response)
      
    },error =>{
      console.log(error); 
    })
   }
   archiveNote(){
    console.log("Note is archive",this.noteCard);
    let req = {
      noteIdList: [this.noteCard.id],
      isArchived: true,
    }
    this.NoteServiceService.archivedService(req).subscribe((response: any) =>{
      console.log(response);
      this.iconstodisplay.emit(response)
    },error =>{
      console.log(error); 
    })
   }
 }
 
