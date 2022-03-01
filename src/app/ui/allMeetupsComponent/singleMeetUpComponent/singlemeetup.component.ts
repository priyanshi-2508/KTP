import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";
import { LoginService } from "src/app/services/login.service";
import { MeetupsService } from "src/app/services/Meetups.service";

@Component({
    selector : 'app-singleMeetUp',
    templateUrl : './singlemeetup.component.html',
    styleUrls:['./singlemeetup.component.css']
})

export class SingleMeetUpComponent{
    @Input() singleItem : any;

    constructor(private _meetUp: MeetupsService,
        private _login: LoginService,
        private _router: Router
        ) {

    }

    AddtoFavorites() {
        if(!this._login.isUserLogin()) {
                this._router.navigateByUrl('/login')
        }else {
            this._meetUp.addToFavourites(this.singleItem); 
        }
        
    }

    checkIfFavorite() {
            return this._meetUp.checkIfExist(this.singleItem);
    }

    RemoveFromFavorite() {
          this._meetUp.removeFromFavourited(this.singleItem);
    }
}