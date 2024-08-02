import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsFormComponent } from './details-form/details-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RestaurantAddedPopupComponent } from './restaurant-added-popup/restaurant-added-popup.component';
import { AllRestaurantsComponent } from './all-restaurants/all-restaurants.component';



@NgModule({
  declarations: [
    DetailsFormComponent,
    RestaurantAddedPopupComponent,
    AllRestaurantsComponent
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

export interface RestaurantAddressDetails {
  id: number;
  streetName: string;
  city: string;
  zipCode: number;
}
export interface RestaurantDetails {
  id: number;
  name: string;
  ownerName: string;
  addressDetails: RestaurantAddressDetails;
  restroType: string;
  contact: string;
  email: string;
}