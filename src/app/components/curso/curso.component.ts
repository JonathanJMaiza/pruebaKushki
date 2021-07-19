import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CursosService } from 'src/app/services/cursos.service';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {
  @Input() curso:any={};
  @Input()  index:number;
  constructor(private _cursosService:CursosService,
    private activatedRoute:ActivatedRoute,
    private router:Router) {
    this.activatedRoute.params.subscribe(params=>{
      this.curso=this. _cursosService.getCurso(params['id']);
      console.log(this.curso)
    })
   }

  ngOnInit(): void {
  }
  regresar(){
    this.router.navigate(['/cursos']);
  }
  pagar(){
    this.router.navigate(['/pago',this.curso.idx]);
  }
}
