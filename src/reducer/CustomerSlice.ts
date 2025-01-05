import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    name : '',
}

const CustomerSlice = createSlice(
    {
        name: 'customer',
        initialState: initialState,
        reducers:{
            printName:(state, action) => {
                state.name = action.payload
            },
            addName:(state,action) => {
                state.push(action.payload)
            },
        }
    }
)

export const {printName, addName} = CustomerSlice.actions;
export default CustomerSlice.reducer;