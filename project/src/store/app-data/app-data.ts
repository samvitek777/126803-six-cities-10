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
  isFavoriteLoaded: false,
  isCommentLoaded: false,
  countFavorites: 0,
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
        state.isCommentLoaded = true;
      })
      .addCase(fetchAddCommentAction.fulfilled, (state, action) => {
        state.comments = action.payload;
        state.isCommentLoaded = false;
      })
      .addCase(fetchFavoritesByIdAction.pending, (state) => {
        state.isFavoriteLoaded = true;
      })
      .addCase(fetchFavoritesByIdAction.fulfilled, (state, action) => {
        state.favorites = action.payload;
        state.countFavorites = state.favorites.length;
        state.isFavoriteLoaded = false;
      })
      .addCase(fetchAddFavoritesAction.fulfilled, (state) => {
        state.countFavorites = state.countFavorites + 1;
      })
      .addCase(fetchDeleteFavoritesAction.fulfilled, (state) => {
        state.countFavorites = state.countFavorites - 1;
      });
  }
});
