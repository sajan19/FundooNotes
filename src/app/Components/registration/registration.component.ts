import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registerForm: FormGroup;
  submitted =false;
  constructor(private formBuilder: FormBuilder) { 
    this.registerForm = this.formBuilder.group({
      first_name: ['',[Validators.required, Validators.minLength(3)]],
      last_name: ['',[Validators.required, Validators.minLength(3)]],
      // lname: ['',[Validators.required, Validators.minLength(3)]],
      email: ['',[Validators.required, Validators.email]],
      password: ['',[Validators.required, Validators.minLength(8)]],
      cpassword: ['',[Validators.required, Validators.minLength(8)]],
    });
  }
 

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.registerForm.value);
    if(this.registerForm.valid){
      console.log(" Form is Valid. Go to Next Step.");
    }else{
      console.log("Invalid Form");
    }
}

}
