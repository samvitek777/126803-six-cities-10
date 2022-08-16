import {offers} from '../mocks/offers';
import {createReducer} from '@reduxjs/toolkit';
import {getActiveCity, getHotels} from './action';

const initialState = {
  offers,
  activeCity: 'Paris'
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getHotels, (state) => {
      state.offers = offers;
    })
    .addCase(getActiveCity, (state, action) => {
      state.activeCity = action.payload;
    });
});

export {reducer};
