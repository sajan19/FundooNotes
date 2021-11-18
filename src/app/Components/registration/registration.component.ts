import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/UserService/user.service';
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registrationForm !: FormGroup;
  submitted =false;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private snackBar: MatSnackBar) { 

    this.registrationForm = this.formBuilder.group({
      service: ['advance', [Validators.required]],
      first_name: ['',[Validators.required, Validators.minLength(3)]],
      last_name: ['',[Validators.required, Validators.minLength(3)]],
      email: ['',[Validators.required, Validators.email]],
      password: ['',[Validators.required, Validators.minLength(8)]],
      cpassword: ['',[Validators.required, Validators.minLength(8)]],
    });
  }
 

  ngOnInit(): void {
  }
  onSubmit(){
    console.log("onSubmit method is calling",this.registrationForm.value);
    if(this.registrationForm.invalid){
      console.log("Invalid Form");
      return;
    }
    else{
      console.log(" Form is Valid. Go to Next Step.");
      let reqData = {
        service: this.registrationForm.value.service,
        first_name: this.registrationForm.value.first_name,
        last_name: this.registrationForm.value.last_name,
        email: this.registrationForm.value.email,
        password: this.registrationForm.value.password,
      }
      this.userService.registration(reqData).subscribe(response=>{
        console.log(response);
        this.snackBar.open("Registered!!!", " ", {duration:2000});
      }, error => {
        console.log("Error in Registration", error);
        this.snackBar.open("Registration Failed!!"," ", {duration:2000});
        
      });

    }
  }

}


