import { Component } from "@angular/core";
import { LoginService } from "src/app/services/login.service";

@Component({
    selector : 'app-login',
    templateUrl : './login.component.html',
    styleUrls : ['./login.component.css']
})

export class LoginComponent{
 
    hideFormClass=false;
    constructor(private _isLogin:LoginService,private _hideForm : LoginService){
        this._isLogin.isLoggedIn.subscribe((res : any)=>{
            this._isLogin = res;
            console.log(this._isLogin);
            this._hideForm.hideForm.subscribe((res:any)=>{
                this.hideFormClass = res;
            }) 
            
        })
       
    }


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
            } else if(this.value.trim().length>8){
                this.validationMsg = 'Password should be less than or equal to 8 letters';
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
        if(this.username.isValid() && this.password.isValid()){
            this._isLogin.isLoggedIn.next(true);
            this.hideFormClass=true;
        } else {
            this.hideFormClass = false;
        }
    }
}