import { createSelector } from '@reduxjs/toolkit';
import { selectedFilter } from 'redux/filter/filter-selectors';
export const selectedContacts = state => state.contacts.contacts;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectVisibleContacts = createSelector(
  [selectedContacts, selectedFilter],
  (contacts, filter) =>
    contacts.filter(({ name }) =>
      name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
    )
);
