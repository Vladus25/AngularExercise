import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-componenete-output',
  templateUrl: './componenete-output.component.html',
  styleUrls: ['./componenete-output.component.css'],

})
export class ComponeneteOutputComponent {

  @Input() names: any[] = [];

  @Output()
  selected = new EventEmitter;

  onNameSelected(name: string) {
    this.selected.emit(name);
  }
}
