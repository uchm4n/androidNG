import {Component} from "@angular/core";
import {Router} from "@angular/router";

@Component({
    selector: "page1",
    templateUrl: "./components/page1/page1.html",
})
export class Page1Component{

    constructor(private route:Router){}

    onTap(){
        this.route.navigate(['']);
    }
}

