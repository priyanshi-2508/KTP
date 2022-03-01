import { Component,OnInit } from "@angular/core";
import { MeetupsService } from "src/app/services/Meetups.service";
import {HttpClient} from '@angular/common/http';
@Component({
    selector : 'app-showAllMeetups',
    templateUrl:'./showAllMeetup.component.html',
    styleUrls : ['./showAllMeetup.component.css']
})

export class ShowAllMeetUpsComponent{

    data : any[] = [];
    loading : boolean = false;

    constructor(private _http:HttpClient, private _TotalMeetUps : MeetupsService){
      
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
            },()=> {
                 this.loading = false;
            }
        )
    }
    
}