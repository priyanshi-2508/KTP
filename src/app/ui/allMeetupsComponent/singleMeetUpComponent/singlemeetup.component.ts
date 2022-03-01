import { Component, Input } from "@angular/core";

@Component({
    selector : 'app-singleMeetUp',
    templateUrl : './singlemeetup.component.html',
    styleUrls:['./singlemeetup.component.css']
})

export class SingleMeetUpComponent{
    @Input() singleItem : any;
}