import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filterValue: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.contacts.push(action.payload);
    },
    removeContact: (state, action) => {
      state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
    },
    setFilterValue: (state, action) => {
      state.filterValue = action.payload;
    },
    setContacts: (state, action) => {
      state.contacts = action.payload;
    },
  },
});

export const { addContact, removeContact, setFilterValue, setContacts } = contactsSlice.actions;
export default contactsSlice.reducer;
