import {AppData} from '../../types/state';
import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import {
  fetchAddCommentAction,
  fetchCommentsByIdAction,
  fetchHotelByIdAction,
  fetchHotelByIdNearbyAction,
  fetchHotelsAction
} from '../api-actions';

const initialState: AppData = {
  offers : [],
  offer : undefined,
  nearby : [],
  comments: [],
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
      });
  }
});
