import { configureStore } from "@reduxjs/toolkit";

import { nanoid } from "nanoid";

const defaultContacts = [
  {
    id: nanoid(),
    contactName: "Rosie Simpson",
    number: "459-12-56",
  },
  {
    id: nanoid(),
    contactName: "Hermione Kline",
    number: "443-89-12",
  },
  {
    id: nanoid(),
    contactName: "Eden Clements",
    number: "645-17-79",
  },
  {
    id: nanoid(),
    contactName: "Annie Copeland",
    number: "227-91-26",
  },
];

export const initialState = {
  contacts: defaultContacts || {
    items: [
      {
        id: nanoid(),
        contactName: "",
        number: "",
      },
    ],
  },
  filters: {
    //це строка пошуку
    contactName: "",
  },
};

const rootReducer = (state = initialState, action) => {
  return state;
};


export const store = configureStore({
  reducer:{
    contacts: rootReducer, },
});

