import { Component, Input } from "@angular/core";

@Component({
    selector:'app-allmeetup',
    templateUrl: './allmeetup.component.html',
    styleUrls: ['./allmeetup.component.css']
})

export class AllMeetUpComponent{

    @Input() AllMeetUps : any[] = [];
}
