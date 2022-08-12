export type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
}

export type City = {
  name: string;
  location: Location;
}

export type Host = {
  id: number;
  name: string;
  isPro: boolean;
  avatarUrl: string;
}

export type Offer = {
  city: City;
  previewImage: string;
  images: string[];
  title: string;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  type: string;
  bedrooms: number;
  maxAdults: number;
  price: number;
  goods: string[];
  host: Host;
  description: string;
  location: Location;
  id: number;
};

export type Point = {
  lat: number;
  lng: number;
};

export type CityPoint = {
  title: string;
  lat: number;
  lng: number;
  zoom: number;
};

export type Offers = Offer[];

export type Points = Point[];
