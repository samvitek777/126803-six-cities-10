import {createAction} from '@reduxjs/toolkit';

export const getHotels = createAction('get/hotels');

export const getHotelsByName = createAction<{cityName : string}>('get/hotelsByName');
