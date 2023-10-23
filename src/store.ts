import { configureStore } from "@reduxjs/toolkit";
import TodoSlice from "./Features/TodoSlice";
const store= configureStore({
    reducer:{
        Todoreducer:TodoSlice
    }
})

export default store