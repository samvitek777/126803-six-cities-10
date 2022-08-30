import {NameSpace} from '../../const';
import {State} from '../../types/state';
import {Offer, Offers} from '../../types/offers';
import {Comments} from '../../types/comment';

export const getOffers = (state: State): Offers => state[NameSpace.Data].offers;
export const getOffer = (state: State): Offer | undefined => state[NameSpace.Data].offer;
export const getNearby = (state: State): Offers => state[NameSpace.Data].nearby;
export const getComments = (state: State): Comments => state[NameSpace.Data].comments;
export const getLoadedDataStatus = (state: State): boolean => state[NameSpace.Data].isDataLoaded;
export const getFavorites = (state: State): Offers => state[NameSpace.Data].favorites;
