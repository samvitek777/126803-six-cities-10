import {offers} from '../mocks/offers';
import {createReducer} from '@reduxjs/toolkit';
import {filterPriceHighToLow, filterPriceLowToHigh, filterTopRatedFirst, getActiveCity, getHotels} from './action';

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
    })
    .addCase(filterPriceLowToHigh, (state) => {
      const offersCopy = [...offers];
      state.offers = offersCopy.sort((a, b) => (a.price - b.price));
    })
    .addCase(filterPriceHighToLow, (state) => {
      const offersCopy = [...offers];
      state.offers = offersCopy.sort((a, b) => (b.price - a.price));
    })
    .addCase(filterTopRatedFirst, (state) => {
      const offersCopy = [...offers];
      state.offers = offersCopy.sort((a, b) => (b.rating - a.rating));
    });
});

export {reducer};
