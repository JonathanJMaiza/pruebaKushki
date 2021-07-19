import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatStepperModule } from '@angular/material/stepper';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {ScrollingModule} from '@angular/cdk/scrolling';
@NgModule({
  imports: [
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatStepperModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    ScrollingModule
  ],
  declarations: [],
  providers: [
  ],
  exports:[
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatStepperModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    ScrollingModule
  ]
})
export class MaterialModule {

  constructor() {}

}
