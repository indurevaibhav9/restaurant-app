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
 
  

  onboardRestaurant(restaurantAddRequest: RestaurantAddRequest): Observable<Object> {
    return this.http
      .post(
        'https://1ca7-2401-4900-1c44-8479-5099-aa35-5647-41a7.ngrok-free.app/restro/createRestro',
        restaurantAddRequest
      )
      
  }


  getRestroDetails() {
    let allRestuantData:RestaurantDetails[] = []
    this.http
      .get<RestaurantDetails[]>(
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
          allRestuantData = response
          console.log(response)
        },
        error: (err) => {
          console.log(err);
          alert(err.message + " Team is working on It, please try after some time");
        },
      });

      return allRestuantData

  }
 
  

  deleteRestaurant() {}
}
