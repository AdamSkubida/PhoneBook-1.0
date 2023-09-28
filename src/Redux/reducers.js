import { createReducer } from '@reduxjs/toolkit';
import { filterContact } from './actions';

const filterInitialState = '';

export const filterReducer = createReducer(filterInitialState, {
  [filterContact]: (state, action) => {
    return action.payload;
  },
});
