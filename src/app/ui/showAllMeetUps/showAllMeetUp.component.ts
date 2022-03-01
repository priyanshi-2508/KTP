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

    constructor(private _http:HttpClient, private _TotalMeetUps : MeetupsService){
      
    }  
    ngOnInit() : void{
        this._getAllMeetUps();
    }

    private _getAllMeetUps(){
        this._http.get('https://meetup-88c8c-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json').subscribe(
            (res : any) => {
                // console.log(res);
                for(let item in res){
                    // console.log(item);
                    this.data.push(res[item]);
                    this._TotalMeetUps.collectionOfMeetUps.subscribe((res : any)=>{
                        console.log(res);
                    })

                    // console.log(this.data);
                }
                
                // this.data = res;
                // console.log(this.data);
                // this._TotalMeetUps.collectionOfMeetUps.next(this.data);
            }
        )
    }
    
}