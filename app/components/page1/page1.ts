import {Component} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {News} from "../../shared/news";

@Component({
    selector: "page1",
    templateUrl: "./components/page1/page1.html",
})
export class Page1Component{


    public data:any;

    constructor(private route:ActivatedRoute,private router: Router){
        this.route.queryParams.subscribe(params => {
            this.data = params['data'];
        });
    }

    onTap(){
        this.router.navigate(['']);
    }
}

