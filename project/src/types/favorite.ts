import {Offers} from './offers';

export type FavoriteOffers = {
  city: string;
  offers: Offers | [];
};

export type FavoritesOffers = FavoriteOffers[];
