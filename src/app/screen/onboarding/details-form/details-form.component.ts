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
  ) {
    this.restaurantDetails = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.pattern('^[a-zA-Z ]+$')]],
      owner: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50), Validators.pattern('^[a-zA-Z ]+$')]],
      street: ['', [Validators.required]],
      city: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]],
      zipcode: ['', [Validators.required, Validators.pattern('^[1-9][0-9]{5}$')]],
      phone: ['', [Validators.required, Validators.pattern('^[789][0-9]{9}$')]],
      email: ['', [Validators.required, Validators.email]],
      type: ['', Validators.required]
    });
  }

  
    
  

  handleSubmit() {     
    if(confirm('Restaurant details about to submit') && this.restaurantDetails.valid){
      this.createRequest(this.restaurantDetails);
      this.restaurantDetails.reset();
    }
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

  // for popup visibility handle
  isPopupVisible = false;

  processRequest(restaurantAddRequestData: RestaurantAddRequest) {
    // to wait backend response , i have to add .subscribe here 
    this.backend.onboardRestaurant(restaurantAddRequestData).subscribe({
      next:(response) =>{
        this.isPopupVisible = true;
      },
      error: (error) => {
        console.log(error);
        alert('server is running down , please try after some time')
      }
    })
     
  }

  handleClose(val: boolean){
    if(val == true){
      this.isPopupVisible = false;
    }
  }




  


}
