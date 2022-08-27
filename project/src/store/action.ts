import {createAction} from '@reduxjs/toolkit';
import {City, Offer, Offers} from '../types/offers';
import {AppRoute, AuthorizationStatus} from '../const';
import {Comments, User} from '../types/comment';

export const loadHotels = createAction<Offers>('data/loadHotels');

export const setDataLoadedStatus = createAction<boolean>('data/setDataLoadedStatus');

export const getActiveCity = createAction<City>('get/active-city');

export const getActiveFilter = createAction<string>('get/active-filter');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const loadHotelsById = createAction<Offer>('data/loadHotelById');

export const loadHotelsByIdNearby = createAction<Offers>('data/loadHotelByIdNearby');

export const loadCommentsById = createAction<Comments>('data/loadCommentsById');

export const currentUser = createAction<User>('get/current-user');

export const redirectToRoute = createAction<AppRoute>('app/redirectToRoute');
