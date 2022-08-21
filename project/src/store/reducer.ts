import {createReducer} from '@reduxjs/toolkit';
import {City, Offers} from '../types/offers';
import {
  getActiveCity,
  getActiveFilter,
  loadHotels, setDataLoadedStatus
} from './action';

type InitState = {
  offers : Offers,
  activeCity : City,
  activeFilter : string,
  isDataLoaded: boolean
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
  isDataLoaded: false
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
    });
});

export {reducer};
