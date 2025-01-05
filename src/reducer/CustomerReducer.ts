import { Customer } from "../models/Customer";

const initialState: Customer[] = [];

export function CustomerReducer(state = initialState, action: { type: string, payload: Customer }) {
    switch (action.type) {
        case 'ADD_CUSTOMER':
            return [...state, action.payload];
        case 'UPDATE_CUSTOMER':
            return state.map((customer: Customer) =>
                customer.email === action.payload.email
                    ? { ...customer, name: action.payload.name, email: action.payload.email, phone: action.payload.phone }
                    : customer
            );
        case 'DELETE_CUSTOMER':
            return state.filter((customer: Customer) => customer.email !== action.payload.email);
        default:
            return state;
    }
}