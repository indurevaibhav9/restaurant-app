import { AddressDetails } from "./AddressDetails";

  export interface RestaurantDetails {
    id: number;
    name: string;
    ownerName: string;
    addressDetails: AddressDetails;
    restroType: string;
    contact: string;
    email: string;
  }