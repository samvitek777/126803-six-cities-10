import {AppProcess} from '../../types/state';
import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';

const initialState: AppProcess = {
  activeCity: {
    'name': 'Paris',
    'location': {
      'latitude': 48.85661,
      'longitude': 2.351499,
      'zoom': 13,
    }
  },
  activeFilter: 'Popular',
  favorites: [],
};

export const appProcess = createSlice({
  name: NameSpace.App,
  initialState,
  reducers: {
    setActiveCity: (state, action) => {
      state.activeCity = action.payload;
    },
    setActiveFilter: (state, action) => {
      state.activeFilter = action.payload;
    }
  },
});

export const {setActiveCity, setActiveFilter} = appProcess.actions;
