import { Component } from "@angular/core";

@Component({
    selector:'app-logo',
    template:` <h3><ng-content></ng-content></h3>`,
    styles:
    ['h3{ padding:20px; }']   
})

export class LogoComponent{

}