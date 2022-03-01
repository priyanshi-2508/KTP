import {Component} from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
    selector:'app-header',
    templateUrl:'./header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent{

    isLogin=false;
    constructor(private _isLogin : LoginService){
        this._isLogin.isLoggedIn.subscribe((res:any)=>{
            this.isLogin = res;
        }) 
    }

    logoutHandler(){
        this.isLogin = false;
    }
}