import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { LoginService } from "src/app/services/login.service";
import { MeetupsService } from "src/app/services/Meetups.service";
@Component({
    selector:'app-individual',
    template:`
        <div class="indivdualMeetUp">
            {{collection}}
            <h2>Welcome to {{collection.title}} meeting</h2>
            
                <app-singleMeetUp [singleItem]="collection"></app-singleMeetUp>
</div>
    `,
    styles:[]
})


export class IndividualComponent{

    constructor(private _activatedRoute : ActivatedRoute ,
        private _meetUps : MeetupsService , 
        private _isLogin : LoginService , 
        private _router : Router){

    }
    collection :any;


    ngOnInit(){
        if(this._isLogin.isUserLogin()){
            this._router.navigateByUrl('/login');
        }
        this._activatedRoute.params.subscribe((res)=>{
            const routeLink = this._activatedRoute.snapshot.paramMap.get('id');
            console.log(routeLink);
        })
        this.showUniqueItem() ;
    }

    showUniqueItem(){
       this.collection =  this._meetUps.showIndividualMeeting();
       console.log("Unique Item Received : ", this.collection);
    }
}