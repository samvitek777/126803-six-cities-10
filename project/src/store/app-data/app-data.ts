import {AppData} from '../../types/state';
import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import {
  fetchAddCommentAction, fetchAddFavoritesAction,
  fetchCommentsByIdAction, fetchDeleteFavoritesAction, fetchFavoritesByIdAction,
  fetchHotelByIdAction,
  fetchHotelByIdNearbyAction,
  fetchHotelsAction
} from '../api-actions';

const initialState: AppData = {
  offers : [],
  offer : undefined,
  nearby : [],
  comments: [],
  favorites: [],
  isDataLoaded: false,
  isRoomLoaded: false,
};

export const appData = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchHotelsAction.pending, (state) => {
        state.isDataLoaded = true;
      })
      .addCase(fetchHotelsAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isDataLoaded = false;
      })
      .addCase(fetchHotelByIdAction.pending, (state) => {
        state.isRoomLoaded = true;
      })
      .addCase(fetchHotelByIdAction.fulfilled, (state, action) => {
        state.offer = action.payload;
        state.isRoomLoaded = false;
      })
      .addCase(fetchHotelByIdNearbyAction.pending, (state) => {
        state.isRoomLoaded = true;
      })
      .addCase(fetchHotelByIdNearbyAction.fulfilled, (state, action) => {
        state.nearby = action.payload;
        state.isRoomLoaded = false;
      })
      .addCase(fetchCommentsByIdAction.pending, (state) => {
        state.isRoomLoaded = true;
      })
      .addCase(fetchCommentsByIdAction.fulfilled, (state, action) => {
        state.comments = action.payload;
        state.isRoomLoaded = false;
      })
      .addCase(fetchAddCommentAction.pending, (state) => {
        state.isRoomLoaded = true;
      })
      .addCase(fetchAddCommentAction.fulfilled, (state, action) => {
        state.comments = action.payload;
        state.isRoomLoaded = false;
      })
      .addCase(fetchFavoritesByIdAction.pending, (state) => {
        state.isRoomLoaded = true;
      })
      .addCase(fetchFavoritesByIdAction.fulfilled, (state, action) => {
        state.favorites = action.payload;
        state.isRoomLoaded = false;
      })
      .addCase(fetchAddFavoritesAction.pending, (state) => {
        state.isRoomLoaded = true;
      })
      .addCase(fetchAddFavoritesAction.fulfilled, (state, action) => {
        state.favorites = action.payload;
        state.isRoomLoaded = false;
      })
      .addCase(fetchDeleteFavoritesAction.pending, (state) => {
        state.isRoomLoaded = true;
      })
      .addCase(fetchDeleteFavoritesAction.fulfilled, (state, action) => {
        state.favorites = action.payload;
        state.isRoomLoaded = false;
      });
  }
});
