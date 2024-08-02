import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RestaurantAddRequest } from '../models/RestaurantAddRequest';
import { Observable } from 'rxjs';
import { RestaurantDetails } from '../models/RestaurantDetails';
@Injectable({
  providedIn: 'root',
})
export class BackendService {
  constructor(private http: HttpClient) {}

  onboardRestaurant(restaurantAddRequest: RestaurantAddRequest) {
    this.http
      .post(
        'https://1ca7-2401-4900-1c44-8479-5099-aa35-5647-41a7.ngrok-free.app/restro/createRestro',
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

//  allRestuantData:RestaurantDetails[] = []
  allRestuantData : any
 
  getRestroDetails() {
    this.http
      .get(
        'https://1ca7-2401-4900-1c44-8479-5099-aa35-5647-41a7.ngrok-free.app/restro/getRestroDetails',
        {
          responseType: 'json',
          headers: new HttpHeaders({
            'ngrok-skip-browser-warning': 'true',
          }),
        }
      ) 
      .subscribe({ 
        next: (response ) => {
          this.allRestuantData = response
          console.log(response)
        },
        error: (err) => {
          console.log(err);
        },
      });

      return this.allRestuantData

  }

  deleteRestaurant() {}
}
