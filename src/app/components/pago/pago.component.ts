import { Component, Injector, OnInit,TemplateRef, ViewChild } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormArray, NumberValueAccessor, FormControl} from '@angular/forms';
import { MyErrorStateMatcher, errorMessages } from 'src/app/models/MyErrorStateMatcher';
import {MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {MatDatepicker} from '@angular/material/datepicker';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import * as _moment from 'moment';
import {default as _rollupMoment, Moment} from 'moment';

import { PasarelaService } from 'src/app/services/pasarela.service';
import { ValidadoresService } from 'src/app/services/validadores.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Cursos, CursosService } from 'src/app/services/cursos.service';
import { BsModalService, BsModalRef, ModalDirective } from 'ngx-bootstrap/modal';
const moment = _rollupMoment || _moment;

export const MY_FORMATS = {
  parse: {
    dateInput: 'MM/YYYY',
  },
  display: {
    dateInput: 'MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};
@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.css'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },

    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
    {
      provide: STEPPER_GLOBAL_OPTIONS, useValue: {displayDefaultIndicatorType: false}
    }
  ],
})
export class PagoComponent implements OnInit {
  @ViewChild('template') public childconfirm:ModalDirective;
  @ViewChild('exito') public childexito:ModalDirective;
  @ViewChild('error') public childerror:ModalDirective;
  valor=true;
  hide = false;
  date = new FormControl(moment());
  errors = errorMessages;
  matcher = new MyErrorStateMatcher();
  firstFormGroup: FormGroup;
  curso:Cursos;
  datos=['CC','NIT','CE','TI','PP','RUC','CURP','RFC','RUT','DNI','PAS'];
  mensaje={};
  constructor(private _cursosService:CursosService,private fb: FormBuilder, 
    private _pasarelaservice:PasarelaService,
    private _validaciones:ValidadoresService,
    private modalService: BsModalService,
    private injector: Injector,
    private activatedRoute:ActivatedRoute,
    private router:Router) { 
      this.activatedRoute.params.subscribe(params=>{
        this.curso=this. _cursosService.getCurso(params['id']);
      })
      //this.curso=this. _cursosService.getCurso(params['id']);
      this.crearFormulario();
    }

  ngOnInit(): void {
  }
  crearFormulario(){
    this.firstFormGroup = this.fb.group({
     ci:      ['',     Validators.required],
     documento: ['',     Validators.required],
     nombre  :['',[Validators.required, Validators.pattern('[a-zA-Z ]{0,30}')]],
     apellido:['',[Validators.required,Validators.pattern('[a-zA-Z ]{0,30}')]],
     email  :['',[Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')] ],
     nameCard:['',[Validators.required, Validators.pattern('[a-zA-Z ]{0,30}')]],
     numberCard:     [ '' , [ Validators.required,
                          Validators.minLength(1),
                          Validators.maxLength(16),
                          Validators.pattern('^[0-9]+$')]],
     expiryMonthYear:['',     Validators.required],
     cvvCard:    [ '' , [ Validators.required,
                          Validators.minLength(3),
                          Validators.maxLength(4),
                          Validators.pattern('^[0-9]+$')]],
    
   },{
    validators: [this._validaciones.fechasfuturas('expiryMonthYear')]
   });
   this.matcher = new MyErrorStateMatcher()
  }
  async onUpload(forma:FormGroup){
    console.log(this.firstFormGroup);
   
    if(this.firstFormGroup.invalid){
      return Object.values(this.firstFormGroup.controls).forEach(control=>{
        console.log(control);
        if (control instanceof FormGroup){
          Object.values(control.controls).forEach(control=>control.markAsTouched()) ;
          }else{
            control.markAsTouched();
            
          }
        });
    }else{
      
      try{
        this.childconfirm.show();
        const pago=await this._pasarelaservice.requestKushky(this.firstFormGroup,this.curso);
        console.log(pago);
        this.mensaje=pago[0];
        this.childconfirm.hide();
        this.childexito.show();
      }catch(e){
        console.log(e);
        this.childconfirm.hide();
        this.childerror.show();
      }
     
    }
  }
  chosenYearHandler(normalizedYear: Moment) {
    const ctrlValue = this.date.value;
    ctrlValue.year(normalizedYear.year());
    this.firstFormGroup.controls['expiryMonthYear'].setValue(ctrlValue);
  }

  chosenMonthHandler(normalizedMonth: Moment, datepicker: MatDatepicker<Moment>) {
    const ctrlValue = this.date.value;
    ctrlValue.month(normalizedMonth.month());
    this.firstFormGroup.controls['expiryMonthYear'].setValue(ctrlValue);
    datepicker.close();
  }
  regresar(){
    this.router.navigate(['/cursos']);
  }
  reiniciar(){
    this.childexito.hide();
    this.childerror.hide();
    this.firstFormGroup.reset({
      ci:"",
      documento :"",
      nombre    :"",
      apellido  :"",
      email     :"",
      nameCard  :"",
      numberCard:"",
      cvvCard   :"",
    });
    
  }
}
