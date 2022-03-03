import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { LoginService } from "src/app/services/login.service";

@Component({
    selector : 'app-login',
    templateUrl : './login.component.html',
    styleUrls : ['./login.component.css']
})

export class LoginComponent{
 
    hideFormClass=false;
    userStatus=false;
    errorMessage = '';
    
    constructor(private _isLogin:LoginService,
        private _hideForm : LoginService,
        private _route : Router,
        private _http : HttpClient 
        ){
        this._isLogin.isLoggedIn.subscribe((res : any)=>{
            this._isLogin = res;
            // console.log(this._isLogin);
            this._hideForm.hideForm.subscribe((res:any)=>{
                this.hideFormClass = res;
            }) 
            
        })
       
    }
    loading:boolean = false;

    username = {
        name:'username',
        type:'text',
        placeholder:'Enter Username',
        validationMsg : 'Username is required',
        isFieldValid:true,
        value:'',
        isValid: function(){
            if(this.value.trim().length< 1){
                    this.validationMsg = 'Username can not be empty';
                    this.isFieldValid = false;
               return false;    
            }
            this.isFieldValid = true;
            return true;
        },
        ifLoggedIn: function(){
            this.value='';
        }
    }

    password={
        name:'password',
        type:'password',
        placeholder:'Enter Password',
        validationMsg : 'Password is required',
        isFieldValid:true,
        value:'',
        isValid: function(){
            if(this.value.trim().length < 1){
                    this.validationMsg = 'Password can not be empty';
                    this.isFieldValid = false;
               return false;    
            } else if(this.value.trim().length>15){
                this.validationMsg = 'Password should be less than or equal to 15 letters';
                this.isFieldValid = false;
                return false;
            }
            this.isFieldValid = true;
            return true;
        },
        ifLoggedIn: function(){
            this.value='';
        }

    }

    onLoginClick(){
        if(this.username.isValid() && this.password.isValid())
        {
            this.loading=true;
            this._http.post('https://reqres.in/api/login',{
                "email": this.username.value,
                "password": this.password.value
            }).subscribe( 
                (response:any)=>{
                    this.errorMessage = '';
                    this.loading = false;
                    this._isLogin.setUserLoggedIn();
                   this._route.navigateByUrl('/showAllMeet');
                   this.hideFormClass=true;
                   
                }, 
                (err)=>{
                    this.loading = false;
                    this.errorMessage = err.error.error;
                }  
            )

            // this._isLogin.setUserLoggedIn();
            // this._route.navigateByUrl('/showAllMeet');
            // this.hideFormClass=true;
        } else {
            this.hideFormClass = false;
        }
    }
}