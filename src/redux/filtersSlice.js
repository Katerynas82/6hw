import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: { contactName: "" },
  reducers: {
    changeFilter: (state, action) => {
      state.contactName = action.payload;
    },
  },
});

export const { changeFilter } = filtersSlice.actions;
export const selectNameFilter = (state) => state.filters.contactName;
export default filtersSlice.reducer;
