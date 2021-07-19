import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {
  private cursos:Cursos[]=[
    {
      nombre:"Java de 0 a 100",
      descripcion:"El mejor curso de Java, POO, JDBC, Servlets, JavaEE, Web Services, JSF, EJB, JPA, PrimeFaces, Hibernate, Spring, Struts!",
      img:"assets/img/curso1.jpg",
      perfil: "assets/img/perfil1.png",
      creador:"Jhon Herrera",
      precio:12.99,
      codigo:"123456",
      idx: 1
    },
    {
      nombre:"Javascript 2021",
      descripcion:" Programación Orientada a Objetos, Funciones Flecha, Callback, Promesas, Async, Await, DOM y más!",
      img:"assets/img/curso2.jpg",
      perfil: "assets/img/perfil3.png",
      creador:"Jhon Herrera",
      precio:10.99,
      codigo:"675891",
      idx: 2
    },
    {
      nombre:"Python 3",
      descripcion:"Aprende a programar con clases y objetos, a usar ficheros y bases de datos SQLite, interfaces gráficas y más con Python!",
      img:"assets/img/curso3.jpg",
      perfil: "assets/img/perfil2.png",
      creador:"Jhon Herrera",
      precio:12.99,
      codigo:"129836",
      idx: 3
    },
    {
      nombre:"C++ de novato a hero",
      descripcion:"Curso diseñado para principiantes o estudiantes universitarios sin conocimientos previos del lenguaje.",
      img:"assets/img/curso4.jpg",
      perfil: "assets/img/perfil1.png",
      creador:"Jhon Herrera",
      precio:19.99,
      codigo:"369475",
      idx: 4
    },
    {
      nombre:"C# curso completo",
      descripcion:"Aprende a programar desde cero con C# 7.0 y Visual Studio 2019, conviértete en programador.",
      img:"assets/img/curso5.jpg",
      perfil: "assets/img/perfil2.png",
      creador:"Jhon Herrera",
      precio:9.99,
      codigo:"893456",
      idx: 5
    },
    {
      nombre:"Maser SQL server",
      descripcion:"SQL Aprende Bases de Datos, Consultas, Funciones, Tablas y Permisos. Diseña y Programa una Base de Datos Relacional SQL.",
      img:"assets/img/curso6.jpg",
      perfil: "assets/img/perfil3.png",
      creador:"Jhon Herrera",
      precio:12.99,
      codigo:"569872",
      idx: 6
    }
  ];

  constructor() { }
  getHeroes():Cursos[]{
    return this.cursos;
  }
  getCurso(id:number){
    
    return this.cursos.find( ({idx }) => idx == id );
    
  }
  buscarCursos( termino:string ):Cursos[]{

    let cursosArr:Cursos[] = [];
    termino = termino.toLowerCase();
  
    for( let i = 0; i < this.cursos.length; i ++ ){
  
      let curso = this.cursos[i];
  
      let nombre = curso.nombre.toLowerCase();
  
      if( nombre.indexOf( termino ) >= 0  ){
        
        cursosArr.push( curso )
      }
  
    }
  
    return cursosArr;

}
}
export interface Cursos{
  nombre:string;
  descripcion:string;
  img:string;
  perfil:string;
  creador:string;
  precio:number;
  codigo:string
  idx?: number;
}
