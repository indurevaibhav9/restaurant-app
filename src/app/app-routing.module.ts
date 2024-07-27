import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsFormComponent } from './screen/onboarding/details-form/details-form.component';
import { HomeComponent } from './components/home/home.component';
import { RestaurantAddedPopupComponent } from './screen/onboarding/restaurant-added-popup/restaurant-added-popup.component';
import { AllRestaurantsComponent } from './screen/onboarding/all-restaurants/all-restaurants.component';

const routes: Routes = [
  {
    path: 'onboarding/details-form',
    component: DetailsFormComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'popup',
    component: RestaurantAddedPopupComponent
  },
  {
    path: 'all-restaurants',
    component: AllRestaurantsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
