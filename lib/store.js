import { configureStore } from "@reduxjs/toolkit";
import Gift from "./slices/GiftCard";
import Etebar from "./slices/Etebar";
import ShowOfCan from "./slices/OfCan";
import SandoqNames from "./slices/Sandoq";

const Store = configureStore({
  reducer: {
    GiftCard: Gift,
    EtebarPul: Etebar,
    Show: ShowOfCan,
    Sandoq: SandoqNames,
  },
});

export default Store;
