import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsFormComponent } from './details-form/details-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RestaurantAddedPopupComponent } from './restaurant-added-popup/restaurant-added-popup.component';
import { AllRestaurantsComponent } from './all-restaurants/all-restaurants.component';
import { RestaurantCardComponent } from './restaurant-card/restaurant-card.component';



@NgModule({
  declarations: [
    DetailsFormComponent,
    RestaurantAddedPopupComponent,
    AllRestaurantsComponent,
    RestaurantCardComponent,
    
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

