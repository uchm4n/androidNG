import {Component, OnInit} from "@angular/core";
import {Router, NavigationExtras} from "@angular/router";
import {NewsService} from "./services/news.service";
import { registerElement } from "nativescript-angular/element-registry";
let application = require('application');
registerElement("PullToRefresh", () => require("nativescript-pulltorefresh").PullToRefresh);
import dialogs = require("ui/dialogs");

@Component({
    selector: "my-app",
    templateUrl: "app.component.html",
    styleUrls: ["app.component.css"],
    providers:[NewsService]
})
export class AppComponent implements OnInit{

    newsList;
    isLoading: boolean = false;
    constructor(private router: Router, public news: NewsService) {
        this.isLoading = true;
        application.android.on(application.AndroidApplication.activityBackPressedEvent, function (args) {
            return this.isLoading = false;
        });

        this.news.getNews().subscribe(data => {
            this.newsList = data;
            this.isLoading = false;
        })
    }

    public ngOnInit() {
        //Just testing Dialog
        //dialogs.login("Your message", "User name label text", "Password label text").then(r => {
        //    console.log("Dialog result: " + r.result + ", user: " + r.userName + ", pwd: " + r.password);
        //});
    }



    public onTap(item: any) {
        this.isLoading = true;
        let navExtras: NavigationExtras = {
            queryParams:{
                "item" : JSON.stringify(item)
            }
        }

        this.router.navigate(['/page1'],navExtras);
    }


    public refreshList(args){
        let pullRefresh = args.object;
        this.news.getNews().subscribe(data => {
            this.newsList = data;
            pullRefresh.refreshing = false;
        })
    }

    public refreshOnPullUp(args){
        let pullRefresh = args.object;
        this.news.nextPage(2).subscribe(data => {
            this.newsList = data;
            pullRefresh.refreshing = false;
        })
    }


}
