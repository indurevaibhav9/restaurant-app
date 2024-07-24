import { Component } from '@angular/core';
import { FormControl, FormControlName, FormGroup } from '@angular/forms';
import { RestaurantAddRequest } from 'src/app/models/RestaurantAddRequest';

@Component({
  selector: 'app-details-form',
  templateUrl: './details-form.component.html',
  styleUrls: ['./details-form.component.scss']
})
export class DetailsFormComponent {

  restaurantAddRequest :RestaurantAddRequest= new RestaurantAddRequest();
  restaurantDetails: FormGroup = new FormGroup({
    name :   new FormControl(''),
    owner : new FormControl(''),
    street: new FormControl(''),
    city : new FormControl(''),
    zipcode:new FormControl(''),
    phone: new FormControl(''),
    email: new FormControl(''),
    type: new FormControl('')
  })
  handleSubmit(){
    console.log(this.restaurantDetails.value)
    this.createRequest(this.restaurantDetails);
    alert('Restaurant details submitted successfully')
    this.restaurantDetails.reset();
  }

  createRequest(details: FormGroup){
    this.restaurantAddRequest.name = details.value['name'];
    this.restaurantAddRequest.owner = details.value['owner'];
    this.restaurantAddRequest.street = details.value['street'];
    this.restaurantAddRequest.city = details.value['city'];
    this.restaurantAddRequest.zipcode = details.value['zipcode'];
    this.restaurantAddRequest.type = details.value['type'];
    this.restaurantAddRequest.contact = details.value['phone'];
    console.log(this.restaurantAddRequest);
  }

}
