import { Component } from '@angular/core';
import { BackendService } from '../../../services/backend.service';

@Component({
  selector: 'app-all-restaurants',
  templateUrl: './all-restaurants.component.html',
  styleUrls: ['./all-restaurants.component.scss']
})
export class AllRestaurantsComponent {
  allRestaurants : Object = {}
  constructor(private backendService: BackendService){
  }

  getAllResto(){
    this.allRestaurants = this.backendService.getAllRestaurants()
    console.log(this.allRestaurants)
  }
}
