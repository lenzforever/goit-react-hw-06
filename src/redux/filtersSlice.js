import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    updateFilter: (state, action) => {
      state.name = action.payload;
    },
  },
});

// Exporting reducer
export const filterReducer = filterSlice.reducer;

// Exporting action creators
export const { updateFilter } = filterSlice.actions;

// Selector
export const selectNameFilter = (state) => state.filters.name;
