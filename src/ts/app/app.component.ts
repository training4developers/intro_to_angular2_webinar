import { Component } from "@angular/core";

@Component({
    selector: "color-tool",
    template: `
        <h1>{{header}}</h1>
        <item-list [items]="colors"></item-list>
        <form>
            <div>
                <label for="new-color-input">New Color</label>
                <input type="text" id="new-color-input" name="newColorInput" [(ngModel)]="newColor">
            </div>
            <button type="button" (click)="addColor()">Add Color</button>
        </form>
    `,
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
