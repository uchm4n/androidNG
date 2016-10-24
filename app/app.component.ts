import {Component} from "@angular/core";

@Component({
    selector: "my-app",
    templateUrl: "app.component.html",
})
export class AppComponent {
    public counter: number = 15;
    public get message(): string {
        if (this.counter > 0) {
            return "დარჩა " + this.counter + " თაფი";
        } else {
            return "იდი ნახუი ეხლა \n გეყო ამდენი კლიკი ბლია!";
        }
    }
    public onTap() {
        this.counter--;
    }

    public reset(){
        this.counter = 15;
    }
}
