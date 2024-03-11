import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {apiCall} from '../utils/api-client.js'
export const getAllJobs = createAsyncThunk("/all-jobs", async ()=>{
    //api call
    // console.log('working 2')
   const response = await apiCall()
  //  console.log('resonse is job slice', response);
   return response.data;
})
export const jobSlice = createSlice({
    initialState:{jobs:[] , loading: false , error: null},
    name : 'jobSlice',
    reducers:{},
    extraReducers:(builder)=>{
    builder.addCase(getAllJobs.pending,(state,action)=>{
         state.loading = true;
         console.log('pending ',state,action);
    }).addCase(getAllJobs.fulfilled,(state,action)=>{
      // console.log('fulfilled ',state,action.payload.jobs);
      state.loading = false;

      state.jobs = action.payload.jobs
         
    }).addCase(getAllJobs.rejected,(state,action)=>{
      state.error = console.log('error occured')
      console.log('rejected',state,action);
      state.loading = true;

         
    })
    
    }
})
export default jobSlice.reducer;