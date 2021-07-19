import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Kushki } from '@kushki/js';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Cursos } from './cursos.service';
@Injectable({
  providedIn: 'root'
})
export class PasarelaService {
  kushki = new Kushki({
    merchantId: '13060cd78b2849d7b21a4a0d1e354aea', // Your public merchant id 
    inTestEnvironment: true,
  });
  constructor(   private http: HttpClient) { }
  async requestKushky(forma:FormGroup, curso:Cursos){
    let fecha:Date=new Date();
    let va=forma.get('expiryMonthYear').value.toDate();
    fecha=va;
    return new Promise<any[]>( (resolve,reject)=>{ 
      this.kushki.requestToken({
        amount: curso.precio,
        currency: "USD",
        card: {
          name:         forma.get('nameCard').value,
          number:       forma.get('numberCard').value,
          cvc:          forma.get('cvvCard').value,
          expiryMonth:  String(fecha.getMonth()+1),
          expiryYear:   String(fecha.getFullYear()).substr(2,3),
        },
      },async  (response:any) => {
        if(response.token){
          console.log(response);
          try{
            const mkc=await this.makeCharge(response.token,forma,curso);
            resolve([mkc]);
          }catch(e){
            console.log(e.error);
            reject(e.error);
            
          }
        } else {
          console.error('Error: ',response.error, 'Code: ', response.code, 'Message: ',response.message);
          reject(response);
        }
      });
    })
  } 
 
  async makeCharge(token:string,forma:FormGroup,curso:Cursos) {
    let nomApe=forma.get('nombre').value+" "+forma.get('apellido').value;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    const postData ={
      "token": token,
      "amount": {
          "subtotalIva": 0,
          "subtotalIva0": curso.precio,
          "ice": 0,
          "iva": 0,
          "currency": "USD"
      },
      "metadata": {
          "contractID": "157AB"
      },
      "contactDetails": {
          "documentType": forma.get('ci').value,
          "documentNumber": forma.get('documento').value,
          "email": forma.get('email').value,
          "firstName": forma.get('nombre').value,
          "lastName": forma.get('apellido').value,
          "phoneNumber": "+593988734644"
      },
      "orderDetails": {
          "siteDomain": "jmteam.com",
          "shippingDetails": {
              "name": nomApe,
              "phone": "+593988734644",
              "address": "Eloy Alfaro 139 y Catalina Aldaz",
              "city": "Quito",
              "region": "Pichincha",
              "country": "Ecuador",
              "zipCode": "170402"
          },
          "billingDetails": {
              "name": nomApe,
              "phone": "+593988734644",
              "address": "Eloy Alfaro 139 y Catalina Aldaz",
              "city": "Quito",
              "region": "Pichincha",
              "country": "Ecuador",
              "zipCode": "170402"
          }
      },
      "productDetails": {
          "product": [{
                  "id": String(curso.idx),
                  "title": curso.nombre,
                  "price": curso.precio,
                  "sku":curso.codigo,
                  "quantity": 1
              }
          ]
      },
      "fullResponse": true
  }

     return this.http.post('https://pruebakushky.herokuapp.com/prueba', postData, httpOptions).toPromise();
  }
}
