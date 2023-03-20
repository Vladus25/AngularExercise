import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-componenete-input',
  templateUrl: './componenete-input.component.html',
  styleUrls: ['./componenete-input.component.css'],

})
export class ComponeneteInputComponent {
  @Input()
  dato !: string;

  Nomi = [
    { id: 1, name: 'Carlo' },
    { id: 2, name: 'Paola' },
    { id: 3, name: 'Vittorio' },
  ];

  onNameSelected(name: string) {
    console.log('Selected Name:', name);
  }

  constructor(){

  }
}
