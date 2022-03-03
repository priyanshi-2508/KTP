import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector:'app-button',
    templateUrl:'./button.component.html',
    styleUrls:['./button.component.css']
})

export class ButtonComponent{
    @Input() typeOfBtn='';
     @Input() isDisabled : any;
    @Output() onClick = new EventEmitter();

    clickHandler() {
         this.onClick.emit();
    }
   
}