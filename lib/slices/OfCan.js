import { createSlice } from "@reduxjs/toolkit";
const initialState = {showStatus:null};

const Show = createSlice({
  name: "showstatus",
  initialState: initialState,
  reducers: {
    status(state,action){
        state.showStatus=action.payload
    }
    
  },
});

export const showActions = Show.actions;
export default Show.reducer;