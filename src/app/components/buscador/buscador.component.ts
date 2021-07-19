import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CursosService } from 'src/app/services/cursos.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {
  cursos:any[]=[];
  termino: string;
  constructor( private activatedRoute:ActivatedRoute,
    private _cursosService:CursosService,
    private router:Router) { 
      this.activatedRoute.params.subscribe(params=>{
        this.termino=params['termino'];
        this.cursos=this._cursosService.buscarCursos(params['termino']);
      });
    }

  ngOnInit(): void {
  }
  verHeroe(idx:number){
    this.router.navigate(['/curso',idx]);
  }
}
