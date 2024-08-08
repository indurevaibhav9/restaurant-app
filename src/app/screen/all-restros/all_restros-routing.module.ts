import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllRestaurantsComponent } from './all-restaurants/all-restaurants.component';

const routes: Routes = [
  {
    path: 'all',
    component: AllRestaurantsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllRestrosRoutingModule {}
