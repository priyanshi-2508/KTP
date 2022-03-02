import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
    selector:'app-header',
    templateUrl:'./header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit{

    isLogin=false;
    constructor(private _isLogin : LoginService ,
        private _router : Router){
         
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
        this._router.navigateByUrl('/login');
    }

    handleLogin(){
        this._router.navigateByUrl('/login');
    }

    handleNewMeetUp(){
        console.log("Hiii");
        this._router.navigateByUrl('/newMeetUp');
    }

    handleAllMeetUps(){
        this._router.navigateByUrl('/showAllMeet');
    }

    handleFavPage(){
        this._router.navigateByUrl('/favorite');
    }
}