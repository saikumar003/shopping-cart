// src/features/productsApi.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// ✅ Correct API setup
export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/" }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => "/products",
    }),
  }),
});

// ✅ Export the hook properly
export const { useGetAllProductsQuery } = productsApi;

export default productsApi;

