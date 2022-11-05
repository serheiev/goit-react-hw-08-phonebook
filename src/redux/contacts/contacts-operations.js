// https://connections-api.herokuapp.com/
// axios.defaults.baseURL = 'https://635ba0abaa7c3f113dc1d967.mockapi.io/api/v1';

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { token } from 'redux/auth/auth-operations';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue, getState }) => {
    try {
      const authToken = getState().auth.token;
      token.set(authToken);
      const { data } = await axios(
        'https://connections-api.herokuapp.com/contacts'
      );

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, { rejectWithValue, getState }) => {
    try {
      const authToken = getState().auth.token;
      token.set(authToken);
      const { data } = await axios.post(
        'https://connections-api.herokuapp.com/contacts',
        contact
      );

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue, getState }) => {
    try {
      const authToken = getState().auth.token;
      token.set(authToken);
      await axios.delete(
        `https://connections-api.herokuapp.com/contacts/${id}`
      );
      return id;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const updateContact = createAsyncThunk(
  'contacts/update',
  async (contact, { rejectWithValue, getState }) => {
    try {
      const authToken = getState().auth.token;
      token.set(authToken);
      await axios.patch(
        `https://connections-api.herokuapp.com/contacts/${contact.id}`,
        contact
      );
      return contact;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
