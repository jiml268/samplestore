import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'http://localhost:4000/api'

export const getAllCategories = createAsyncThunk(
  'prod/getAllCats',
     async (_, thunkAPI) => {
       try {
      const response = await axios.get(
        `/getCatogories`
         );
      return response.data;
       } catch (error) {
              

      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getAllSubCategories = createAsyncThunk(
  'prod/getAllSubCats',
     async (_, thunkAPI) => {
       try {
      const response = await axios.get(
        `/getSubCatogories`
         );
      return response.data;
       } catch (error) {
              

      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
