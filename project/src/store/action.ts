import {createAction} from '@reduxjs/toolkit';
import {City, Offers} from '../types/offers';

export const loadHotels = createAction<Offers>('data/loadHotels');

export const setDataLoadedStatus = createAction<boolean>('data/setDataLoadedStatus');

export const getActiveCity = createAction<City>('get/active-city');

export const getActiveFilter = createAction<string>('get/active-filter');
