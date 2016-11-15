// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic, NativeScriptModule } from "nativescript-angular/platform";
import {NgModule, enableProdMode} from "@angular/core";
import { AppComponent } from "./app.component";
import {HttpModule} from "@angular/http";
import {NativeScriptHttpModule} from "nativescript-angular/http";
import {FormsModule} from "@angular/forms";
import {NativeScriptRouterModule} from "nativescript-angular/router";
import {appRoutes, appComponents} from "./app.routing";

@NgModule({
    declarations: [AppComponent,...appComponents],
    bootstrap: [AppComponent],
    imports: [
        NativeScriptModule,
        NativeScriptHttpModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forRoot(appRoutes),
        HttpModule,
        FormsModule,
    ],
})
class AppComponentModule {}

enableProdMode();
platformNativeScriptDynamic().bootstrapModule(AppComponentModule);