import { Component } from "@angular/core";

@Component({
    selector: "color-tool",
    template: require("./app.component.html"),
    styles: [ require("./app.component.scss") ],
})
export class AppComponent {

    public header: string = "Color Tool";
    public newColor: string = "";

    public colors: string[] = [
        "red", "white", "green", "blue", "yellow",
        "black",
    ];

    public addColor() {
        this.colors.push(this.newColor);
    }
}
