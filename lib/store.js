import { configureStore } from '@reduxjs/toolkit'
import Gift from './slices/GiftCard'
 const Store =configureStore({
    reducer: {GiftCard:Gift},
  })

export default Store