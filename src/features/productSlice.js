import { createSlice , createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
    items:[],
    status:null,
    error:null,
}
export const productsFetch = createAsyncThunk(
    "products/productsFetch",
    async()=>{
    const response = await axios.get("http://localhost:5000/products")
    return response?.data
    }
)
const productSlice = createSlice({
    name:"products",
    initialState,
    reducers:{}, //action data
    extraReducers: (builder) => {
        builder
          .addCase(productsFetch.pending, (state) => {
            state.status = "loading";
            state.error = null; // Reset errors on new request
          })
          .addCase(productsFetch.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.items = action.payload; // Update items with fetched data
          })
          .addCase(productsFetch.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.payload || "Failed to fetch products";
          });
      },
    // extraReducers:{ //action types
    //  [productsFetch.pending]:(state,action)=>{
    //     state.status = "pending"
    //  },
    //  [productsFetch.fulfilled]:(state,action)=>{
    //     state.status = "success"
    //     state.items = action.payload
    //  },
    //  [productsFetch.rejected]:(state,action)=>{
    //     state.status = "rejected"
    //  },
    // }
})
export default productSlice.reducer