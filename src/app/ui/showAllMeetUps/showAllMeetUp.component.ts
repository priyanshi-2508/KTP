import { Component,OnInit } from "@angular/core";
import { MeetupsService } from "src/app/services/Meetups.service";
import {HttpClient} from '@angular/common/http';
import { Router } from "@angular/router";
@Component({
    selector : 'app-showAllMeetups',
    templateUrl:'./showAllMeetup.component.html',
    styleUrls : ['./showAllMeetup.component.css']
})

export class ShowAllMeetUpsComponent{

    data : any[] = [];
    loading : boolean = false;

    constructor(private _http:HttpClient, 
        private _TotalMeetUps : MeetupsService,
        private _router : Router){
      
    }  
    ngOnInit() : void{
        this._getAllMeetUps();
    }

    private _getAllMeetUps(){
        this.loading = true;
        this._http.get('https://meetup-88c8c-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json').subscribe(
            (res : any) => {
               this.loading = false;
                for(let item in res){
                res[item].id = item;
                 this.data.push(res[item]);  
                }
                this.getIndividualMeeting(this.data);
                // console.log(this.data);
            },()=> {
                 this.loading = false;
            }
        )
    }
    redirectUrl : any;
    getIndividualMeeting(data : any){
        for(let item of data){

            this.redirectUrl = item.id;
            this.redirectUrl = this.redirectUrl.substring(1);
            // console.log(this.redirectUrl);
            // this._router.navigateByUrl('/showAllMeet/'+this.redirectUrl);
        }
    }
    
}

// -Mx8ammOaoGgbTEiZi80