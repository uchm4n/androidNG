import {Component} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    selector: "page1",
    templateUrl: "./components/page1/page1.html"
})
export class Page1Component{


    public item:any;
    constructor(private route:ActivatedRoute,private router: Router){
        this.route.queryParams.subscribe(params => {
            this.item = JSON.parse(params['item']);
        });
    }

    onTap(){
        this.router.navigate(['']);
    }

    readMore(url:any){
        this.router.navigate(['/web',url]);
    }
}

