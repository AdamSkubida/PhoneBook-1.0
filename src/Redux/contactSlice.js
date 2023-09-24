import { createSlice } from '@reduxjs/toolkit';

const contactsInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const { items, isLoading, error } = state;

const fetchLoading = () => {
  isLoading = true;
};

const fetchError = actionPayload => {
  error = actionPayload;
};

const fetchNoError = () => {
  error = null;
};

const fetchNoLoading = () => {
  isLoading = false;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  redcers: {
    fetchingInProgress() {
      fetchLoading;
    },
    fetchingSucces(action) {
      fetchNoLoading;
      fetchNoError;
      items = action.payload;
    },
    fetchingError(action) {
      fetchNoLoading;
      fetchError(action.payload);
    },
    addingInProgress() {
      fetchLoading;
    },
    addingSucces(action) {
      fetchNoLoading;
      fetchNoError;
      items = [...items, action.payload];
    },
    addingError(action) {
      fetchError(action.payload);
    },
    deleteInProgress() {
      fetchLoading;
    },
    deleteSucces(action) {
      fetchNoLoading;
      fetchNoError;
      items = items.filter(contact => contact.id !== action.payload);
    },
    deleteError(action) {
      fetchError(action.payload);
    },
  },
});

export const {
  fetchingInProgress,
  fetchingSucces,
  fetchingError,
  addingInProgress,
  addingSucces,
  addingError,
  deleteInProgress,
  deleteSucces,
  deleteError,
} = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
