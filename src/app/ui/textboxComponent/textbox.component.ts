import { Component,Input } from "@angular/core";

@Component({
    selector:'app-textbox',
    templateUrl : './textbox.component.html',
    styleUrls : ['./textbox.component.css']
})

export class TextBoxComponent{
    @Input() nameOfBox : any;
}