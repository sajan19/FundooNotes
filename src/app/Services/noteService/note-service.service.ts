import { Injectable } from '@angular/core';
import { HttpService } from '../HttpService/http.service';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class NoteServiceService {
token:any;
  constructor(private httpService: HttpService) { }
  createNote(reqPayLoad: any) {
    this.token=localStorage.getItem('token')

    console.log("Data is in user service",reqPayLoad);
    let options = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization':this.token
      })
    }
    return this.httpService.postService('notes/addNotes', reqPayLoad, true, options);
  }

  getAllNotesService(){
    this.token=localStorage.getItem('token')
    let options = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization':this.token
      })
    };
    return this.httpService.getService('notes/getNotesList',true, options);
  }
  
  getReminderNotes(){
    this.token=localStorage.getItem('token')
    let options = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization':this.token
      })
    };
    return this.httpService.getService('notes/getReminderNotesList',true, options);
  }


  deleteNoteService(data:any){
    this.token=localStorage.getItem('token')
    let options = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization':this.token
      })
    };
    return this.httpService.postService('notes/deleteForeverNotes',data,true, options);
  }



  getArchiveNoteService(){
    this.token=localStorage.getItem('token')
    let options = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization':this.token
      })
    };
    return this.httpService.getService('notes/getArchiveNotesList',true, options);
  }

   //to move to archive
   archivedService(reqPayload: any) {
    this.token=localStorage.getItem('token')
    console.log("Notes moved to Archived", reqPayload);

    let options = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': this.token
      })

    }
    return this.httpService.postService('notes/archiveNotes', reqPayload, true, options)
  }
   
  //to update notes
   updateNoteService(reqPayload: any) {
    this.token=localStorage.getItem('token')
    console.log("Notes Updated", reqPayload);

    let options = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': this.token
      })

    }
    return this.httpService.postService('notes/updateNotes', reqPayload, true, options)
  }

   //to move to trash
   trashNoteService(reqPayload: any) {
    console.log("in trashnoteservice", reqPayload);

    let httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': this.token
      })

    }
    console.log("Post Service data",reqPayload);
    
    return this.httpService.postService('notes/trashNotes', reqPayload, true, httpOptions)
  }
  //to get trash notes
  getTrashService() {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': this.token
      })

    }
    return this.httpService.getService('notes/getTrashNotesList', true, httpOptions)
  }

}
