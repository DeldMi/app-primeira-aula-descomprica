import { NgModule } from "@angular/core";
import { HeaderComponent } from "./Header.componete";
import { RouterModule } from "@angular/router";



@NgModule({
    declarations: [
        HeaderComponent
    ],
    imports: [
        RouterModule
    ],
    exports: [
        HeaderComponent
    ],
    providers: [],
    bootstrap: []
  })
export class ComponentModule {

}