import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MioComponenteComponent } from './components/mio-componente/mio-componente.component';
import { ComponeneteInputComponent } from './components/componenete-input/componenete-input.component';
import { ComponeneteOutputComponent } from './components/componenete-output/componenete-output.component';
import { ButtoneComponent } from './components/buttone/buttone.component';

@NgModule({
  declarations: [
    AppComponent,
    MioComponenteComponent,
    ComponeneteInputComponent,
    ComponeneteOutputComponent,
    ButtoneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
