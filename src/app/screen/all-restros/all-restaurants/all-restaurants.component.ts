import { Component } from '@angular/core';
import { BackendService } from '../../../services/backend.service';
import { RestaurantDetails } from '../../../models/RestaurantDetails';

@Component({
  selector: 'app-all-restaurants',
  templateUrl: './all-restaurants.component.html',
  styleUrls: ['./all-restaurants.component.scss'],
})
export class AllRestaurantsComponent {
  allRestaurants: any = [];
  constructor(private backendService: BackendService) {
    this.getAllResto();
  }

  
  restaurants : RestaurantDetails[] = []
  getAllResto(): void {
    this.restaurants = this.backendService.getRestroDetails();
  }
}
