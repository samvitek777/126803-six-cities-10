import {createReducer} from '@reduxjs/toolkit';
import {City, Offers} from '../types/offers';
import {
  getActiveCity,
  getActiveFilter,
  loadHotels, requireAuthorization, setDataLoadedStatus
} from './action';
import {AuthorizationStatus} from '../const';

type InitState = {
  offers : Offers,
  activeCity : City,
  activeFilter : string,
  isDataLoaded: boolean,
  authorizationStatus: AuthorizationStatus
}

const initialState : InitState = {
  offers: [],
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
    });
});

export {reducer};
