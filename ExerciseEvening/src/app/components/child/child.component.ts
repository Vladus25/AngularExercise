import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Input() names: any[] = [];

  @Output()
  selected = new EventEmitter();

  onNameSelected(name: string) {
    this.selected.emit(name);
  }

  buongiorno(){
    console.log("Buongiorno Simona :)");
  }

  ViewData(nome : string){
    console.log("La data di oggi: " + nome);
  }

}
