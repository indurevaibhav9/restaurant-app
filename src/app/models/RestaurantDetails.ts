export interface addressDetails {
    id: number;
    streetName: string;
    city: string;
    zipCode: number;
  }
  export interface RestaurantDetails {
    id: number;
    name: string;
    ownerName: string;
    addressDetails: addressDetails;
    restroType: string;
    contact: string;
    email: string;
  }