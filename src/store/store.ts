import {configureStore} from "@reduxjs/toolkit";
import countReducer from "../reducer/CountSlice.ts";

export const store = configureStore(
    {
        reducer: {
            counter: countReducer,
        },
    }
)