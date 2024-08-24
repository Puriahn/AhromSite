import { createSlice } from "@reduxjs/toolkit";
const initialState = {sandoq:null};

const Sandoq = createSlice({
  name: "sandoq",
  initialState: initialState,
    reducers:{
        set(state,action){
            state.sandoq=action.payload
        }
    }
});

export const sandoqActions = Sandoq.actions;
export default Sandoq.reducer;