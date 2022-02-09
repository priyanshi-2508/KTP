import { Component, Input } from "@angular/core";

@Component({
    selector:'app-normal',
    templateUrl:'./normal.component.html',
    styles:[`
    .nrmlBtn{
        color: "grey";
        margin: 10px;
    }
    `]
})

export class NormalComponent{
    @Input() n_name="";
}

