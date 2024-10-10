import { createSlice } from "@reduxjs/toolkit";


const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    contactName: "",
    status: "all",
  },
  reducers: {
    changeFilter(state, action) {
      state.contactName = action.payload;
    },
  },
});

export const { changeFilter } = filtersSlice.actions;
export const selectNameFilter = (state) => state.filters.name;
export default filtersSlice.reducer;
