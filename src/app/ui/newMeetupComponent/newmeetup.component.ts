import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { LoginService } from "src/app/services/login.service";
import { MeetupsService } from "src/app/services/Meetups.service";

@Component({
    selector:'app-newmeetup',
    templateUrl:'./newmeetup.component.html',
    styleUrls:['./newmeetup.component.css']
})

export class NewMeetUpComponent{

    constructor(private _isLogin : LoginService , 
        private _router: Router,
         private _meetUp : MeetupsService,
         private _http:HttpClient){

    }
    meetUp = false;
    hideFormClass=false;
    showMsg = 'MeetUp Added Successfully!!';
    newMeetUp = {
         title : '',
         description : '',
         address : '',
         imageUrl : ''
    }

   
    submitHandler() {
        console.log(this.newMeetUp);
        if(!this._isLogin.isUserLogin()) {
            this._router.navigateByUrl('/login')
        } else {
            this.addNewItemToAPI(this.newMeetUp); 
            this.hideFormClass=true;
            this.meetUp = true;
        }
    }

    addNewItemToAPI(newItem : any){
        this._http.post('https://meetup-88c8c-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json',newItem).subscribe((res)=>{
            console.log(res);
        })
    }


}
