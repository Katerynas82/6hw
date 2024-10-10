import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

export const initialState = {
  items: [
    { id: nanoid(), contactName: "Rosie Simpson", number: "459-12-56" },
    { id: nanoid(), contactName: "Hermione Kline", number: "443-89-12" },
    { id: nanoid(), contactName: "Eden Clements", number: "645-17-79" },
    { id: nanoid(), contactName: "Annie Copeland", number: "227-91-26" },
  ],
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
    reducers: {
    addContact: {
      reducer(state, action) {
        state.items.push(action.payload);
      },
   
    },
    deleteContact(state, action) {
      state.items=state.items.filter(contact => contact.id !== action.payload);
      
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const selectContacts = ((state) => state.contacts.items);

export default contactsSlice.reducer;
