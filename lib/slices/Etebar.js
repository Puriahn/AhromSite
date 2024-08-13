import { createSlice } from "@reduxjs/toolkit";
const initialState = { price: 20000000, month: 12 };

const MoneyCharge = createSlice({
  name: "Etebar",
  initialState: initialState,
  reducers: {
    price(state, action) {
      state.price = action.payload;
    },
    month(state, action) {
      state.month = action.payload;
    },
  },
});

export const etebarActions = MoneyCharge.actions;
export default MoneyCharge.reducer;
