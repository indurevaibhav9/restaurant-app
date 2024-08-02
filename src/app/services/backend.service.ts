import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RestaurantAddRequest } from '../models/RestaurantAddRequest';
import { Observable } from 'rxjs';
import { RestaurantDetails } from '../screen/onboarding/onboarding.module';
@Injectable({
  providedIn: 'root',
})
export class BackendService {
  constructor(private http: HttpClient) {}

  onboardRestaurant(restaurantAddRequest: RestaurantAddRequest) {
    this.http
      .post(
        'https://e44e-2401-4900-1c7e-6368-c478-4e62-3a0b-6334.ngrok-free.app/restro/createRestro',
        restaurantAddRequest
      )
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

 allRestuantData: RestaurantDetails[] = []
 
  getRestroDetails() {
    this.http
      .get(
        'https://2866-2401-4900-1c44-8479-4d1e-678a-eb44-1d62.ngrok-free.app/restro/getRestroDetails',
        {
          responseType: 'json',
          headers: new HttpHeaders({
            'ngrok-skip-browser-warning': 'true',
          }),
        }
      ) 
      .subscribe({
        next: (response ) => console.log(response),
        error: (err) => {
          console.log(err);
        },
      });
  }

  deleteRestaurant() {}
}
