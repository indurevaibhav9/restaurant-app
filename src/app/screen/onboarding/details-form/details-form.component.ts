import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RestaurantAddRequest } from 'src/app/models/RestaurantAddRequest';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-details-form',
  templateUrl: './details-form.component.html',
  styleUrls: ['./details-form.component.scss'],
})
export class DetailsFormComponent {
  restaurantAddRequest: RestaurantAddRequest = new RestaurantAddRequest();
  restaurantDetails: FormGroup;

  constructor(
    private fb: FormBuilder,
    private backend: BackendService,
    private router: Router
  ) {
    this.restaurantDetails = this.fb.group({
      name: [''],
      owner: [''],
      street: [''],
      city: [''],
      zipcode: [''],
      phone: [''],
      email: [''],
      type: [''],
    });
  }

  handleSubmit() {
    console.log(this.restaurantDetails.value);
    this.createRequest(this.restaurantDetails);
    alert('Restaurant details submitted successfully');
    this.restaurantDetails.reset();
  }

  createRequest(details: FormGroup) {
    this.restaurantAddRequest.name = details.value['name'];
    this.restaurantAddRequest.owner = details.value['owner'];
    this.restaurantAddRequest.street = details.value['street'];
    this.restaurantAddRequest.city = details.value['city'];
    this.restaurantAddRequest.zipcode = details.value['zipcode'];
    this.restaurantAddRequest.type = details.value['type'];
    this.restaurantAddRequest.phone = details.value['phone'];
    this.restaurantAddRequest.email = details.value['email'];
    // console.log(this.restaurantAddRequest);
    this.processRequest(this.restaurantAddRequest);
  }

  processRequest(restaurantAddRequestData: RestaurantAddRequest) {
    const serializedData = JSON.stringify(restaurantAddRequestData);
    this.router.navigate(['/popup'], {
      queryParams: { restaurantAddRequestData: serializedData },
    });

    const message = this.backend.onboardRestaurant(restaurantAddRequestData);
  }
}
