import { Component } from '@angular/core';

@Component({
  selector: 'app-mio-componente',
  templateUrl: './mio-componente.component.html',
  styleUrls: ['./mio-componente.component.css']
})
export class MioComponenteComponent {

  saluta(){
    console.log("Ciao a tutti");
  }

  salutaConNome(nome : string){
    console.log("Ciao sono:" + nome);
  }
}
