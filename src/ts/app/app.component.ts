import { Component } from "@angular/core";

@Component({
    selector: "color-tool",
    template: `<h1>{{header}}</h1>`,
})
export class AppComponent {
    public header: string = "Hello World!";
}
