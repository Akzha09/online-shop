import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./counter/countSlice"
import wishReducer from "./wishSlice/wishSlice"

const myStore = configureStore({
    reducer :{

        counter: countReducer,
        wishlist: wishReducer,
    }
})

export default myStore