import {Component} from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
export const errorMessages: { [key: string]: string } = {

  namecard: 'El nombre en la tarjeta requerido',
  namecardfor: 'Solo se aceptan letras',
  numcard: 'El número de tarjeta requerido',
  expcard: 'La fecha de vencimiento requerido',
  codcard: 'El código seguridad requerido',
  codcardmin: 'Mínimo 3 números',
  codcardmax: 'Máximo 4 números',
  numcardmax: 'Máximo 16 números',
  codcardnum: 'Ingre solo números',
  email:'El email es requerido',
  emailmal:'El email es erroneo',
  doc:'El tipo de documento es requerido',
  docu:'El documento es requerido',
  apellido:'El apellido es requerido',
  nameCli: 'El nombre es requerido',
};