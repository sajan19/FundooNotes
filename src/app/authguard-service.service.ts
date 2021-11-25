import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthguardServiceService {

  constructor() { }

  gettoken(){
    console.log("Getting Token in AuthGuard Service");
    
    return !!localStorage.getItem("token")
  }


}
