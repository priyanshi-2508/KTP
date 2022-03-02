import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class LoginService{
    isLoggedIn = new Subject<boolean>();
    hideForm = new Subject<boolean>();
    isUserLoggedIn: boolean = false;

    setUserLoggedIn() {
        this.isUserLoggedIn = true;
        this.isLoggedIn.next(true);
    }


    setUserLogout() {
          this.isUserLoggedIn = false;
          this.isLoggedIn.next(false);
        //   console.log(this.isUserLoggedIn);
    } 


    isUserLogin() {
         return this.isUserLoggedIn;
    }



    
}