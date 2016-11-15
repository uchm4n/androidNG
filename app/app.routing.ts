import  {Page1Component} from "./components/page1/page1";
import  {Page2Component} from "./components/page2/page2";
import {AppComponent} from "./app.component";



export const appRoutes: any = [
    {path: '', component: AppComponent},
    {path: 'page1', component: Page1Component},
    {path: 'page2', component: Page2Component},
    {path: '**', redirectTo: ''}
];


export const appComponents: any = [Page1Component , Page2Component];