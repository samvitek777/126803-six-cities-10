import {createReducer} from '@reduxjs/toolkit';
import {City, Offer, Offers} from '../types/offers';
import {
  currentUser,
  getActiveCity,
  getActiveFilter, loadCommentsById,
  loadHotels, loadHotelsById, loadHotelsByIdNearby, requireAuthorization, setDataLoadedStatus
} from './action';
import {AuthorizationStatus} from '../const';
import {Comments, User} from '../types/comment';

type InitState = {
  offers : Offers,
  offer : Offer | undefined,
  nearby : Offers,
  comments: Comments,
  activeCity : City,
  activeFilter : string,
  isDataLoaded: boolean,
  authorizationStatus: AuthorizationStatus,
  currentUser: User | undefined
}

const initialState : InitState = {
  offers: [],
  offer: undefined,
  nearby: [],
  comments: [],
  activeCity: {
    'name': 'Paris',
    'location': {
      'latitude': 48.85661,
      'longitude': 2.351499,
      'zoom': 13
    }
  },
  activeFilter: 'Popular',
  isDataLoaded: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  currentUser: undefined
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadHotels, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setDataLoadedStatus, (state, action) => {
      state.isDataLoaded = action.payload;
    })
    .addCase(getActiveCity, (state, action) => {
      state.activeCity = action.payload;
    })
    .addCase(getActiveFilter, (state, action) => {
      state.activeFilter = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(loadHotelsById, (state, action) => {
      state.offer = action.payload;
    })
    .addCase(loadHotelsByIdNearby, (state, action) => {
      state.nearby = action.payload;
    })
    .addCase(loadCommentsById, (state, action) => {
      state.comments = action.payload;
    })
    .addCase(currentUser, (state, action) => {
      state.currentUser = action.payload;
    });
});

export {reducer};
