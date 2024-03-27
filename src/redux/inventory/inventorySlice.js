import { createSlice } from '@reduxjs/toolkit';
import { getAllCategories, getAllSubCategories } from './inventoryOperators';

const initialState = {
    isloading: false,
    pageWidth: 0,
    allProduces: {},
    allCats: {},
    allSubCats: {}
      
};

const inventorySlice = createSlice({
    name: 'inventory',
    initialState,
    reducers: {
        setWidth: (state, action) => {
            state.pageWidth = action.payload
        },
    },
   
       extraReducers: builder =>
        builder
               .addCase(getAllCategories.pending, (state, action) => {
             state.isloading = true;
      })
                  
               .addCase(getAllCategories.fulfilled, (state, action) => {
                   if (action.payload.code === 200) {
                              state.allCats = action.payload.data;
                          }
                   if (action.payload.code === 404) {
                                   state.allCats = [];
                          }
                                state.isloading = false
        
      })
               .addCase(getAllCategories.rejected, (state, action) => {
                    state.isloading = false    
                  } 
        )
       
               .addCase(getAllSubCategories.pending, (state, action) => {
            console.log('pending')
             state.isloading = true;
      })
                  
               .addCase(getAllSubCategories.fulfilled, (state, action) => {
                    console.log('fulfilled')
                   if (action.payload.code === 200) {
                              state.allSubCats = action.payload.data;
                          }
                   if (action.payload.code === 404) {
                                   state.allallSubCatsCats = [];
                          }
                                state.isloading = false
        
      })
               .addCase(getAllSubCategories.rejected, (state, action) => {
                   console.log('rejected')
                    state.isloading = false    
                  } 
    )
});

 export const { setWidth} = inventorySlice.actions;
  
export const inventoryReducer = inventorySlice.reducer;