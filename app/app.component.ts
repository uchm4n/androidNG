import {Component} from "@angular/core";
import {Router, NavigationExtras} from "@angular/router";
import {NewsService} from "./services/news.service";


@Component({
    selector: "my-app",
    templateUrl: "app.component.html",
    styleUrls: ["app.component.css"],
    providers:[NewsService]
})
export class AppComponent {

    newsList;
    isLoading: boolean = false;
    constructor(private router: Router, news: NewsService) {
        this.isLoading = true;
        news.getNews().subscribe(data => {
            this.newsList = data;
            this.isLoading = false;
        })
    }


    public onTap(item: any) {
        this.isLoading = true;
        let navExtras: NavigationExtras = {
            queryParams:{
                "data" : item.item
            }
        }

        this.router.navigate(['/page1'],navExtras);
    }

}
