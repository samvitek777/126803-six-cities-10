import {createAction} from '@reduxjs/toolkit';

export const getHotels = createAction('get/hotels');

export const getActiveCity = createAction<string>('get/active-city');

export const filterPriceLowToHigh = createAction('filter/price-low-to-high');

export const filterPriceHighToLow = createAction('filter/price-high-to-low');

export const filterTopRatedFirst = createAction('filter/top-rated-first');
