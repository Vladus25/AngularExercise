import { Component, ViewChild } from '@angular/core';
import { ChildComponent } from './components/child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ExerciseEvening';

  data :string = "";

  Nomi = [
    { id: 1, name: 'Carlo' },
    { id: 2, name: 'Paola' },
    { id: 3, name: 'Vittorio' }
  ];

  onNameSelected(Object: string) {
    console.log('Selected Name:', Object);
  }

  // Creo un istanza figlio del tipo del figlio (ChildComponent) nel padre
  @ViewChild(ChildComponent) child!: ChildComponent;

  //Questa funzione viene richiamata da figlio e i dati si uniscono
  CurrentDate(){
    const today = new Date();
    //metto la data in una stringa
    this.data = today.toLocaleDateString('it-IT');
    // passo la data alla funzione "ViewData"
    this.child.ViewData(this.data);
  }

  constructor(){

  }
}
