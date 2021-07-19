import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cursotarjeta',
  templateUrl: './cursotarjeta.component.html',
  styleUrls: ['./cursotarjeta.component.css']
})
export class CursotarjetaComponent implements OnInit {
  @Input() curso:any={};
  @Input()  index:number;
  @Output() cursoSelecionado:EventEmitter<number>;
  constructor(private router:Router) { 
    this.cursoSelecionado= new EventEmitter();
  }

  ngOnInit(): void {
  }
  verCurso(){
    // this.heroeSelecionado.emit(this.index);
  this.router.navigate(['/curso',this.index]);
  }
}
