import { Component } from '@angular/core';
import { BackendService } from '../../../services/backend.service';

@Component({
  selector: 'app-all-restaurants',
  templateUrl: './all-restaurants.component.html',
  styleUrls: ['./all-restaurants.component.scss'],
})
export class AllRestaurantsComponent {
  allRestaurants: any = [];
  constructor(private backendService: BackendService) {}

  getAllResto(): void {
    this.backendService.getRestroDetails();
  }
}
