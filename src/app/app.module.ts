import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TablaComponent } from './component/tabla/tabla.component';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { NuevaPersonaComponent } from './component/nueva-persona/nueva-persona.component';


@NgModule({
  declarations: [
    AppComponent,
    TablaComponent,
    NuevaPersonaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
