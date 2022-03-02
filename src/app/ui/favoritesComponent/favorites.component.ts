import { Component,Input } from "@angular/core";
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { MeetupsService } from "src/app/services/Meetups.service";

@Component({
    selector: 'app-fav',
    templateUrl : './favorites.component.html',
    styleUrls : ['./favorites.component.css']
})

export class FavoriteComponent{
    

    collection :any[] =[];
    itemToRemove :any;
    ngOnInit(){
        this.showFav()
    }
    constructor(private _meetUp: MeetupsService,
        private _login: LoginService,
        private _router: Router
        ) {

    }
    showFav(){
        this.collection  = this._meetUp.showAllFav();
        console.log("Collection is : ",this.collection);
        
    }
    checkIfFavorite() {
        return this._meetUp.checkIfExist(this.collection);
    }   

    RemoveFromFavorite() {
        this._meetUp.removeFromFavourites(this.collection);
    }

}