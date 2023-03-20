import { Component, ViewChild } from '@angular/core';
import { MioComponenteComponent } from './components/mio-componente/mio-componente.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'NewApp';
  nome :string = "Carlo";
  eventi :string = "Evento";
  datoChild= {nome: "pasquale"}

  @ViewChild(MioComponenteComponent) child!: MioComponenteComponent;

  SalutaFiglio(){
    this.child.salutaConNome(this.nome);
  }

  logEvento(e:any){
    console.log(e);
  }

}
