import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Http, Response} from "@angular/http";
import {News} from "../shared/news";

@Injectable()
export class NewsService {

    private newsUrl = 'http://net.adjara.com/NewsRSS/getNews.php?categories=&sources=&types=&order=recent&date=false';  // URL to web API
    constructor (private http: Http) {}

    getNews(): Observable<News[]> {
        return this.http.get(this.newsUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }

    nextPage(page:number): Observable<News[]>{
        return this.http.get(this.newsUrl + '&page=' + page)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body || { };
    }


    private handleError (error: Response | any) {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

}