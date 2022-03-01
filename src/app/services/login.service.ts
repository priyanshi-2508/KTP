import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class LoginService{
    isLoggedIn = new Subject<boolean>();

    hideForm = new Subject<boolean>();
    
}