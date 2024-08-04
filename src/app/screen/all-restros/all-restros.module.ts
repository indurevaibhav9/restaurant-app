import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllRestrosRoutingModule } from './all_restros-routing.module';
import { AllRestaurantsComponent } from './all-restaurants/all-restaurants.component';
import { RestaurantCardComponent } from './restaurant-card/restaurant-card.component';



@NgModule({
  declarations: [AllRestaurantsComponent, RestaurantCardComponent],
  imports: [
    CommonModule,
    AllRestrosRoutingModule,
  ]
})
export class AllRestrosModule { }
