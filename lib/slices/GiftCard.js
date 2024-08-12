import { createSlice } from "@reduxjs/toolkit";
const initialState = {price:500000,drawing:1,form:{}};

const Cart = createSlice({
  name: "giftCard",
  initialState: initialState,
  reducers: {
    price(state, action) {
      state.price=action.payload
    },
    drawing(state,action){
        state.drawing=action.payload
    }
    
  },
});

export const giftActions = Cart.actions;
export default Cart.reducer;