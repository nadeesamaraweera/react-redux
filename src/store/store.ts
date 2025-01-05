import { createStore, combineReducers } from 'redux';
import { CustomerReducer } from '../reducer/CustomerReducer';

const rootReducer = combineReducers({
    customer: CustomerReducer,
});

// Create Redux Store
const store = createStore(rootReducer);

export default store;
