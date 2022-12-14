import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  deleteContact,
  updateContact,
} from './contacts-operations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { contacts: [], isLoading: false, error: null },
  extraReducers: {
    [fetchContacts.pending]: state => {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled]: (state, { payload }) => {
      state.contacts = payload;
      state.isLoading = false;
    },
    [fetchContacts.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },

    [addContact.pending]: state => {
      state.isLoading = true;
    },
    [addContact.fulfilled]: (state, { payload }) => {
      state.contacts.push(payload);
      state.isLoading = false;
    },
    [addContact.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },

    [deleteContact.pending]: state => {
      state.isLoading = true;
    },
    [deleteContact.fulfilled]: (state, { payload }) => {
      state.contacts = state.contacts.filter(({ id }) => id !== payload);
      state.isLoading = false;
    },
    [deleteContact.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },
    [updateContact.pending]: state => {
      state.isLoading = true;
    },
    [updateContact.fulfilled]: (state, { payload }) => {
      const index = state.items.findIndex(user => user.id === payload.id);
      state.items[index] = payload;
      state.isLoading = false;
    },
    [updateContact.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
