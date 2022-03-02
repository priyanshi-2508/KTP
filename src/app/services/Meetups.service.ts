import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class MeetupsService{

    // collectionOfMeetUps = new Subject<[]>();

    collection: any[] = [];
    collectionFav : any[]=[];
    addToFavourites(itemToAdd: any) {
        if(!this.collection.some(item => item.id === itemToAdd.id)) {
                this.collectionFav.push(itemToAdd); 
                // console.log(this.collectionFav);
        }
    }
    showAllFav(){
        return this.collectionFav;
    }
    

    removeFromFavourites(itemToRemove: any) {
        console.log("Item removed",itemToRemove);
        this.collectionFav  = this.collectionFav.filter(item => item.id !== itemToRemove.id);
        // console.log("CollectionFav : ",this.collectionFav);
        // if(this.collectionFav.length==0){

        // } else {
        //     this.showAllFav();
        // }
        
    }

    checkIfExist(itemToAdd: any) {
      return  this.collectionFav.some(item => item.id === itemToAdd.id)
    }

    getAllCollections() {
         return this.collection;
    }

    addNewMeetUp(itemToAdd : any){
        
        this.collection.push(itemToAdd);
        console.log(this.collection);
    }

    


    
}