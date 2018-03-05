export interface User {
  username: string;
  email: string;
  location: Location;
}

export interface Location {
  lng: number;
  lat: number;
}
