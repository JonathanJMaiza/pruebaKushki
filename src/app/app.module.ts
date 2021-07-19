import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { CursoComponent } from './components/curso/curso.component';
import { CursotarjetaComponent } from './components/cursotarjeta/cursotarjeta.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PagoComponent } from './components/pago/pago.component';
import { MaterialModule } from './material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { environment } from 'src/environments/environment';
import {AngularFireModule} from '@angular/fire';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    CursosComponent,
    CursoComponent,
    CursotarjetaComponent,
    NavbarComponent,
    BuscadorComponent,
    PagoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
