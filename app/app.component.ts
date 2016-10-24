import {Component} from "@angular/core";
var http = require("http");


@Component({
    selector: "my-app",
    templateUrl: "app.component.html",
})
export class AppComponent{

    message;
    constructor(){}


    public onTap() {
        http.getJSON("http://api.icndb.com/jokes/random")
            .then(response => {
                this.message = response.value.joke;
            });

    }

}
