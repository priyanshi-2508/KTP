import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class MeetupsService{

    collectionOfMeetUps = new Subject<[]>();

    collection: any[] = [];

    addToFavourites(itemToAdd: any) {
        if(!this.collection.some(item => item.id === itemToAdd.id)) {
                this.collection.push(itemToAdd); 
        }
    }
    

    removeFromFavourited(itemToRemove: any) {
        this.collection  = this.collection.filter(item => item.id !== itemToRemove.id);
    }

    checkIfExist(itemToAdd: any) {
      return  this.collection.some(item => item.id === itemToAdd.id)
    }

    getAllCollections() {
         return this.collection;
    }


    
}