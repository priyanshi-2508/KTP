import { Component, Input } from '@angular/core';
import element from  '../learning/json_data.json';
import container from '../learning/jsonData.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  userName = '';
  userNameValid = true
  
  password = '';
  passwordValid =  true;

  /// if true, I am Logined in user
  /// if False , I am not LoggedIn
  isLoginTrue = false;

@Input() name: string = "Hello JavaTpoint"; 

response = element;
a = this.response.rawMapping.Sleep.vkey;

result = container;


isFieldUsernameValid() {
  this.userNameValid =  this.userName.length > 0;
    return this.userNameValid;
}

isFieldPasswordValid() {
   this.passwordValid = this.password.length > 0;
   return this.passwordValid;
}

onLoginclick () {
    if(this.isFieldUsernameValid() && this.isFieldPasswordValid()) {
       // hit API
      
    }else {
      return false;
    }
    return true;
}

loginHandler() {
      //API 
      this.isLoginTrue =  true;
}

logoutHandler () {
   // API
   this.isLoginTrue =  false;
}



}   
