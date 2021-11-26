import { Component, OnInit } from '@angular/core';
import { NoteServiceService } from 'src/app/Services/noteService/note-service.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {
  // NotesList=[]
  Noteslist:any=[];

  constructor(private NoteServiceService: NoteServiceService) { }

  ngOnInit(): void {
    this.getTrash();
  }
  getTrash() {
    this.NoteServiceService.getTrashService().subscribe((result: any) => {
      console.log("ongettrash", result);
      this.Noteslist = result.data.data.reverse()
      this.Noteslist=this.Noteslist.filter((noteData:any)=>{
        return noteData.isDeleted === true;
       });
      console.log('trashlist is in trash-note',this.Noteslist);
    })
      
    // }, error => {
    //   console.log(error);

    // })

  }
  receiveMessageFromDeleteNote($event: any) {
    console.log("Notes get deleted and AutoRefresh",$event);
    this.getTrash()
  }

}
