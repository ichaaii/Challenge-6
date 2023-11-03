import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    search: []
  };

const authSearch = createSlice({ 
    name : "movieSearchAuth",
    initialState,
    reducers: {
        setSearch: (state, action) => {
            state.search = action.payload;
        },
    }
 })

 export const { setSearch } = authSearch.actions
 export default authSearch.reducer;