import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {NewsService} from "./services/news.service";
import {News} from "./shared/news";


@Component({
    selector: "my-app",
    templateUrl: "app.component.html",
    styleUrls: ["app.component.css"],
    providers:[NewsService]
})
export class AppComponent {

    newsList;
    constructor(private router: Router, news: NewsService) {
        news.getNews().subscribe(data => {
            this.newsList = data;
        })
    }


    public onTap() {
        this.router.navigate(['/page1']);
    }

}
