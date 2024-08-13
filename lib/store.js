import { configureStore } from "@reduxjs/toolkit";
import Gift from "./slices/GiftCard";
import Etebar from "./slices/Etebar";
const Store = configureStore({
  reducer: { GiftCard: Gift, EtebarPul: Etebar },
});

export default Store;
