import { Component, Input } from '@angular/core';
import { RestaurantDetails } from '../../../models/RestaurantDetails';

@Component({
  selector: 'app-restaurant-card',
  templateUrl: './restaurant-card.component.html',
  styleUrls: ['./restaurant-card.component.scss']
})
export class RestaurantCardComponent {
  @Input() restaurant: RestaurantDetails={
    id : 1,
    name: '',
    ownerName: 'string',
    addressDetails: {
      id: 1,
    streetName: 'string',
    city: 'string',
    zipCode: 1
    },
    restroType: 'string',
    contact: 'string',
    email: 'string' 
    }

    deleteRestaurant(id:number){

    }
}
