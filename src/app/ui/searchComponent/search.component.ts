import { Component,Input } from "@angular/core";

@Component({
    selector:'app-search',
    templateUrl: './search.component.html',
    styles: [`
    
    .input_search{
        width:460px;
        height:30px;
    };

    `]

})
 export class SearchComponent{
    @Input() searchbar = "";
    
 }

