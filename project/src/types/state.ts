import {store} from '../store/index.js';
import {Comments, User} from './comment';
import {AuthorizationStatus} from '../const';
import {City, Offer, Offers} from './offers';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type UserProcess = {
  authorizationStatus: AuthorizationStatus,
  currentUser: User | undefined,
};

export type AppData = {
  offers : Offers,
  offer : Offer | undefined,
  nearby : Offers,
  comments: Comments,
  isDataLoaded: boolean,
  isRoomLoaded: boolean,
};

export type AppProcess = {
  activeCity : City,
  activeFilter : string,
};
