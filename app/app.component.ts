import {Component} from "@angular/core";
import {Location} from "@angular/common"
import {Router} from "@angular/router";
import * as AppLocationSettings from "application-settings";

@Component({
    selector: "my-app",
    templateUrl: "app.component.html",
})
export class AppComponent {
    public counter: number = 16;
    public personList: Array<Object>
    
    public get message(): string {
        if (this.counter > 0) {
            return this.counter + " taps left";
        } else {
            return "Hoorraaay! \nYou are ready to start building!";
        }
    }
    
    public onTap() {
        this.counter--;
    }
    
    
    constructor(private router:Router,location:Location){
        this.personList = JSON.parse(AppLocationSettings.getString("people","[]"));
        location.subscribe(path => {
            this.personList = JSON.parse(AppLocationSettings.getString("people","[]"));
        });
    }
    
}
