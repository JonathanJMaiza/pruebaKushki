import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class ValidadoresService {

  constructor() { }
  fechasfuturas(hora1:string){
    let dat= new Date();
    
    return (formGroup:FormGroup)=>{
      //let fecha:Date=formGroup.get('expiryMonthYear').value.toDate();
      let ultimoDia = new Date(dat.getFullYear(), dat.getMonth() + 1, 0);
      console.log(ultimoDia);
      const date1C=formGroup.controls[hora1];
      
      if(date1C.value!=null&&date1C.value!=undefined){
       
        let newDateVar = new Date(date1C.value);
        console.log(ultimoDia, newDateVar);
        if(ultimoDia<=newDateVar){
          console.log('entra 1');
          date1C.setErrors(null);
       }else {
        console.log('entra 2')
        date1C.setErrors({futu:true});
       }
      }else{
        return;
        //date2C.setErrors(null);
      }
    }
  }
}
