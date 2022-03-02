import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector:'app-normal',
    templateUrl:'./normal.component.html',
    styles:[]
})

export class NormalComponent{
    
    @Output()  event = new EventEmitter();

    onClickHandler(){
        this.event.emit();
    }
}

