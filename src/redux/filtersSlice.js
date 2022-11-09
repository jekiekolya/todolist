import { createSlice } from '@reduxjs/toolkit';
import { statusFilter } from './constants';

const filtersInitialState = {
  status: statusFilter.all,
};
const filtersSlice = createSlice({
  name: 'filters',
  initialState: filtersInitialState,
  reducers: {
    setStatusFilter(state, action) {
      state.status = action.payload;
    },
  },
});

export const { setStatusFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
