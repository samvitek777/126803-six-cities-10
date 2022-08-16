import {offers} from '../mocks/offers';
import {createReducer} from '@reduxjs/toolkit';
import {getHotelsByName} from './action';

const initialState = {
  offers,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getHotelsByName, (state, action) => {
      state.offers = offers.filter((offer) => offer.city.name === action.payload.cityName);
    });
});

export {reducer};
