import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthguardServiceService } from './authguard-service.service';
import { Router } from '@angular/router';
// import(AuthguardServiceService)

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   return true;
  // }


  // canActivate () : boolean
  // {
  //   return true;
  // }


  constructor(private Authguardservice: AuthguardServiceService, private router: Router) {}  
    canActivate(): boolean {  
    if (!this.Authguardservice.gettoken()) {  
        this.router.navigateByUrl("/login"); 
        console.log('Authguard working smooth');
         
    }  
    return this.Authguardservice.gettoken();  
}  
}
