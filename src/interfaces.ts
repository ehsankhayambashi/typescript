export interface Address {
  city: string;
  steet: string;
  zipCode: number;
}

export interface User {
  name: string;
  lastname?: string;
  country: string;
  address: Address;
  isAdmin: boolean;
}
