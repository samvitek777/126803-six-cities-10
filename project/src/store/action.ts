import {createAction} from '@reduxjs/toolkit';

export const getHotels = createAction('get/hotels');

export const getActiveCity = createAction<string>('get/active-city');
