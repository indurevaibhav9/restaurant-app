import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsFormComponent } from './details-form/details-form.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DetailsFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    
  ],
  exports:[
    DetailsFormComponent
  ]
})
export class OnboardingModule { }
