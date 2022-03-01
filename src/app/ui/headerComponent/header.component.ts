import {Component, OnInit} from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
    selector:'app-header',
    templateUrl:'./header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit{

    isLogin=false;
    constructor(private _isLogin : LoginService){
         
    }
    ngOnInit(): void {
            this._listnerToUserLogin()
    }

    private  _listnerToUserLogin() {
            this._isLogin.isLoggedIn.subscribe((val) => {
                    this.isLogin = val;
            });
    }

    logoutHandler(){
        this._isLogin.setUserLogout();
    }
}