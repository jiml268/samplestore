import { configureStore } from '@reduxjs/toolkit';
import { inventoryReducer } from './inventory/inventorySlice'

export const store = configureStore({
    reducer: { 
     inventory: inventoryReducer
    },

});

export default store;