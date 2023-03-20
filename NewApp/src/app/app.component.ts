import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `
    <app-child (buttonClicked)="onButtonClicked()"></app-child>
    <p *ngIf="buttonWasClicked">Hai cliccato il pulsante!</p>
  `,
})
export class AppComponent {
  title = 'NewApp';
  nome :string = "Carlo";
  eventi :string = "Evento";

}
