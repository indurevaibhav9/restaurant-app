import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RestaurantAddRequest } from 'src/app/models/RestaurantAddRequest';
@Component({
  selector: 'app-restaurant-added-popup',
  templateUrl: './restaurant-added-popup.component.html',
  styleUrls: ['./restaurant-added-popup.component.scss'],
})
export class RestaurantAddedPopupComponent {
  
  constructor(
   
  ) {}

  @Input() restaurantDetails : RestaurantAddRequest = new RestaurantAddRequest()
  @Output() closePopupEvent = new EventEmitter<boolean>();

  handleAccept() {
    this.closePopupEvent.emit(true);
  }
}
