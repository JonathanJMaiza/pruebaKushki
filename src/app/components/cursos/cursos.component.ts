import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cursos, CursosService } from 'src/app/services/cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  cursos: Cursos[]=[];
  constructor(private _cursosService:CursosService,
    private router:Router) { }

  ngOnInit(): void {
    this.cursos= this._cursosService.getHeroes();

  }
  verCurso(event:any){
    
  }
}
