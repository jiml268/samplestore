import { createSlice } from '@reduxjs/toolkit';

const initialState = {
      pageWidth: 0,
};

const inventorySlice = createSlice({
    name: 'inventory',
    initialState,
    reducers: {
        setWidth: (state, action) => {
            state.pageWidth = action.payload
            console.log('state.pageWidth', state.pageWidth)
        },
    }
})

 export const { setWidth,  } = inventorySlice.actions;
  
export const inventoryReducer = inventorySlice.reducer;