import { Component } from "@angular/core";

@Component({
    selector:'app-newmeetup',
    templateUrl:'./newmeetup.component.html',
    styleUrls:['./newmeetup.component.css']
})

export class NewMeetUpComponent{
 
    newMeetUp = {
         title : '',
         description : '',
         address : '',
         imageUrl : ''
    }

    
    submitHandler() {
        console.log(this.newMeetUp);
    }


}
