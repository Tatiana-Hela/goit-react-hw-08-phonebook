import { createSelector } from '@reduxjs/toolkit';
import { selectContacts } from 'redux/contacts/contacts-selector';

export const selectFilter = state => state.filter;

export const selectVisibleContacts = createSelector(
  [selectFilter, selectContacts],
  (filter, contacts) => {
    const normalizeFilter = filter.trim().toLowerCase();

    return contacts.filter(contact =>
      contact.name.trim().toLowerCase().includes(normalizeFilter)
    );
  }
);
