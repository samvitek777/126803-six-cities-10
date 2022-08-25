import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state';
import {AxiosInstance} from 'axios';
import {APIRoute, AppRoute, AuthorizationStatus} from '../const';
import {Offer, Offers} from '../types/offers';
import {
  currentUser,
  loadCommentsById,
  loadHotels,
  loadHotelsById,
  loadHotelsByIdNearby, redirectToRoute,
  requireAuthorization,
  setDataLoadedStatus
} from './action';
import {dropToken, saveToken} from '../services/token';
import {AuthData} from '../types/auth-data';
import {AddComment, Comments, User} from '../types/comment';

export const fetchHotelsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchHotels',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Offers>(APIRoute.Hotels);
    dispatch(setDataLoadedStatus(true));
    dispatch(loadHotels(data));
    dispatch(setDataLoadedStatus(false));
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data} = await api.post<User>(APIRoute.Login, {email, password});
    saveToken(data.token);
    dispatch(currentUser(data));
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
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
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  },
);

export const fetchHotelByIdAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchHotelById',
  async (id, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<Offer>(APIRoute.HotelById + id);
      dispatch(setDataLoadedStatus(true));
      dispatch(loadHotelsById(data));
      dispatch(setDataLoadedStatus(false));
    } catch {
      dispatch(redirectToRoute(AppRoute.NotFount));
    }
  },
);

export const fetchHotelByIdNearbyAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchHotelByIdNearby',
  async (id, {dispatch, extra: api}) => {
    const {data} = await api.get<Offers>(APIRoute.HotelById + id + APIRoute.Nearby);
    dispatch(setDataLoadedStatus(true));
    dispatch(loadHotelsByIdNearby(data));
    dispatch(setDataLoadedStatus(false));
  },
);

export const fetchCommentsByIdAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchCommentsByIdAction',
  async (id, {dispatch, extra: api}) => {
    const {data} = await api.get<Comments>(APIRoute.Comments + id);
    dispatch(setDataLoadedStatus(true));
    dispatch(loadCommentsById(data));
    dispatch(setDataLoadedStatus(false));
  },
);

export const fetchAddCommentAction = createAsyncThunk<void, AddComment, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchAddCommentAction',
  async ({hotelId, comment, rating}, {dispatch, extra: api}) => {
    const {data} = await api.post<Comments>(APIRoute.Comments + hotelId, {comment, rating});
    dispatch(setDataLoadedStatus(true));
    dispatch(loadCommentsById(data));
    dispatch(setDataLoadedStatus(false));
  },
);
