import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { DisplayCardComponent } from './Components/display-card/display-card.component';
import { ForgotPasswordComponent } from './Components/forgot-password/forgot-password.component';
import { GetAllNotesComponent } from './Components/get-all-notes/get-all-notes.component';
import { IconsComponent } from './Components/icons/icons.component';
import { LoginComponent } from './Components/login/login.component';
import { RegistrationComponent } from './Components/registration/registration.component';
import { ResetPasswordComponent } from './Components/reset-password/reset-password.component';
import { TakeNoteComponent } from './Components/take-note/take-note.component';
// import { TakeNoteComponent } from './Components/take-note/take-note.component';

const routes: Routes = [
  
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {path:'registration', component:RegistrationComponent},
  {path:'login', component:LoginComponent},
  {path:'icons', component:IconsComponent},
  {path:'resetpassword/:token', component:ResetPasswordComponent},
  // {path:'display-card', component:DisplayCardComponent},
  // {path:'reset-password', component:ResetPasswordComponent},
  {path:'forgot-password', component:ForgotPasswordComponent},
  {path:'home', component:DashboardComponent,
  children:[
    {path:'notes', component:GetAllNotesComponent},
    // {path:'display-card', component:DisplayCardComponent},
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
