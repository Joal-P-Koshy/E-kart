import { configureStore } from "@reduxjs/toolkit";
import wishList from "./slice/wishList";
import cartSlice from "./slice/cartSlice";

const store = configureStore({
    reducer: {
        wishListReducer : wishList,
        cartReducer : cartSlice
    }
})

export default store