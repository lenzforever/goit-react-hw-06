import { createSlice } from '@reduxjs/toolkit';

// Initial state for contacts
const initialState = {
  items: [],
};

// Creating contacts slice
const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.items.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter(contact => contact.id !== action.payload);
    },
  },
});

// Exporting reducer
export const contactsReducer = contactsSlice.reducer;

// Exporting action creators
export const { addContact, deleteContact } = contactsSlice.actions;

// Selector to get contacts
export const selectContacts = (state) => state.contacts.items;
