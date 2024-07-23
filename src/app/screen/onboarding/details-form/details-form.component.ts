import { Component } from '@angular/core';
import { FormControl, FormControlName, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-details-form',
  templateUrl: './details-form.component.html',
  styleUrls: ['./details-form.component.scss']
})
export class DetailsFormComponent {

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
    this.restaurantDetails.reset();
    alert('Restaurant details submitted successfully')
  }

}
