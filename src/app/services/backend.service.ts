import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RestaurantAddRequest } from '../models/RestaurantAddRequest';

@Injectable({
  providedIn: 'root',
})
export class BackendService {
  constructor(private http: HttpClient) {}

  onboardRestaurant(restaurantAddRequest: RestaurantAddRequest) {
    this.http
      .post('URL', restaurantAddRequest, { responseType: 'text' })
      .subscribe({
        next: (response) => {
          console.log('response got from backend is : ', response);
          return `restaurant added successfully ${response}`;
        },
        error: (error) => {
          console.log('error occured : ', error);
          return 'something is wrong in onboardrestuarant funcion of backend service';
        },
      });
  }
}
