import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-buttone',
  templateUrl: './buttone.component.html',
  styleUrls: ['./buttone.component.css']
})
export class ButtoneComponent {
  @Input()

  dato2!:{
    nome:string,
  }

  @Output()

  clickBottone = new EventEmitter();

  emettiEvento(){
    this.clickBottone.emit("ciao" + this.dato2.nome)
  }

}
