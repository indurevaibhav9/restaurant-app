import { Component } from '@angular/core';
import { FormBuilder, FormGroup, RequiredValidator, Validators } from '@angular/forms';
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
      name: ['',[Validators.required, Validators.minLength(2)]],
      owner: ['',[Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      street: ['',[Validators.required]],
      city: ['',[Validators.required]],
      zipcode: ['',[Validators.required]],
      phone: ['',[Validators.required,Validators.pattern('^[1-9]+$') ]],
      email: ['',[Validators.required]],
      type: ['',Validators.required],
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
    this.restaurantAddRequest.streetName = details.value['street'];
    this.restaurantAddRequest.city = details.value['city'];
    this.restaurantAddRequest.zipCode = details.value['zipcode'];
    this.restaurantAddRequest.type = details.value['type'];
    this.restaurantAddRequest.contact = details.value['phone'];
    this.restaurantAddRequest.email = details.value['email'];
    this.processRequest(this.restaurantAddRequest);
  }

  processRequest(restaurantAddRequestData: RestaurantAddRequest) {
    const message = this.backend.onboardRestaurant(restaurantAddRequestData);
    const jsonDataForPopup = JSON.stringify(restaurantAddRequestData);
    this.router.navigate(['/popup'], {
      queryParams: { restaurantAddRequestData: jsonDataForPopup },
    });
  }
}
