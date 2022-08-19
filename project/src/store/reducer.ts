import {offers} from '../mocks/offers';
import {createReducer} from '@reduxjs/toolkit';
import {
  getActiveCity,
  getActiveFilter,
  getHotels
} from './action';

const initialState = {
  offers,
  activeCity: 'Paris',
  activeFilter: 'Popular'
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getHotels, (state) => {
      state.offers = offers;
    })
    .addCase(getActiveCity, (state, action) => {
      state.activeCity = action.payload;
    })
    .addCase(getActiveFilter, (state, action) => {
      state.activeFilter = action.payload;
    });
});

export {reducer};
