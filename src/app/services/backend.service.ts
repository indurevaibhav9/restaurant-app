import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RestaurantAddRequest } from '../models/RestaurantAddRequest';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BackendService {
  constructor(private http: HttpClient) {}

  onboardRestaurant(restaurantAddRequest: RestaurantAddRequest) {
    this.http
      .post('https://e44e-2401-4900-1c7e-6368-c478-4e62-3a0b-6334.ngrok-free.app/restro/createRestro', restaurantAddRequest)
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

  getAllRestaurants(): Object {
    this.http.get('https://705c-2401-4900-1c7e-6368-5c1e-6b15-b05e-e9ba.ngrok-free.app/restro/getRestroDetails', { responseType: 'json' })
      .subscribe({
        next: (response) => {
          console.log('All restaurants:', response);
        },
        error: (error) => {
          console.error('Error occurred:', error);
          if (error.error instanceof ErrorEvent) {
            // Client-side or network error
            console.error('Client-side error:', error.error.message);
          } else {
            // Backend error
            console.error('Backend error status:', error.status);
            console.error('Backend error body:', error.error);
          }
        }
      });
  
  

    return {}
  }

  // getAllRestaurants() : Observable<any>{
  //   return this.http.get('https://364a-2401-4900-1c7e-6368-5c1e-6b15-b05e-e9ba.ngrok-free.app/restro/getRestroDetails')
  // }
  
  deleteRestaurant(){
    
  }
}

  
