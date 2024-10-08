import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./store";

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    deleteContact: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    addContact: (state, action) => {
      state.items = [...state.items, action.payload];
    },
  },
});

export const selectContacts = (state) => state.contacts.items;
export const { deleteContact } = contactsSlice.actions;
export const { addContact } = contactsSlice.actions;
export default contactsSlice.reducer;


