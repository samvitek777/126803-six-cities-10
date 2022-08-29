import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state';
import {AxiosInstance} from 'axios';
import {APIRoute} from '../const';
import {Offer, Offers} from '../types/offers';
import {dropToken, saveToken} from '../services/token';
import {AuthData} from '../types/auth-data';
import {AddComment, Comments, User} from '../types/comment';

export const fetchHotelsAction = createAsyncThunk<Offers, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchHotels',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Offers>(APIRoute.Hotels);
    return data;
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    await api.get(APIRoute.Login);
  },
);

export const loginAction = createAsyncThunk<User, AuthData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data} = await api.post<User>(APIRoute.Login, {email, password});
    saveToken(data.token);
    return data;
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  },
);

export const fetchHotelByIdAction = createAsyncThunk<Offer, number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchHotelById',
  async (id, {dispatch, extra: api}) => {
    const {data} = await api.get<Offer>(APIRoute.HotelById + id);
    return data;
  },
);

export const fetchHotelByIdNearbyAction = createAsyncThunk<Offers, number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchHotelByIdNearby',
  async (id, {dispatch, extra: api}) => {
    const {data} = await api.get<Offers>(APIRoute.HotelById + id + APIRoute.Nearby);
    return data;
  },
);

export const fetchCommentsByIdAction = createAsyncThunk<Comments, number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchCommentsByIdAction',
  async (id, {dispatch, extra: api}) => {
    const {data} = await api.get<Comments>(APIRoute.Comments + id);
    return data;
  },
);

export const fetchAddCommentAction = createAsyncThunk<Comments, AddComment, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchAddCommentAction',
  async ({hotelId, comment, rating}, {dispatch, extra: api}) => {
    const {data} = await api.post<Comments>(APIRoute.Comments + hotelId, {comment, rating});
    return data;
  },
);
