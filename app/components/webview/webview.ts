import {Component, Input, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: "web-view",
    template: ` 
<Label text="sdfsdfsdfsd" ></Label>
`,
})
export class WebViewComponent {

    public url:string;

    constructor(private route:ActivatedRoute){
        this.route.params.subscribe((params) => {
            this.url = params["url"]
        });
    }

}
