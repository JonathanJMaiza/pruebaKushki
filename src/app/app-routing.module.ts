import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { CursoComponent } from './components/curso/curso.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { HomeComponent } from './components/home/home.component';
import { PagoComponent } from './components/pago/pago.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'cursos', component: CursosComponent },
  { path: 'curso/:id', component: CursoComponent },
  { path: 'buscar/:termino', component: BuscadorComponent },
  { path: 'pago/:id',     component: PagoComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'cursos' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
