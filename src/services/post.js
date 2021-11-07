import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const postApi = createApi({
 // The unique key that defines where the Redux store will store our cache.
 reducerPath: 'postApi',

 // The base query to request data.
 // RTK Query ships with fetchBaseQuery, which is a lightweight fetch wrapper that automatically handles request headers and response parsing in a manner similar to common libraries like axios.
 baseQuery: fetchBaseQuery({
  baseUrl: 'https://jsonplaceholder.typicode.com/',
 }),

  // The set of operations that we want to perform against the server.
  endpoints: (builder) => ({

    getAllPost: builder.query({
     query: () => ({
      url: 'posts',
      method: 'GET'
     })
    }),

    getPostById: builder.query({
        query: (id) => {
         console.log("ID:", id)
         return {
          url: `posts/${id}`,
          method: 'GET'
         }
        }
       }),

       getPostByLimit: builder.query({
        query: (num) => {
         console.log("Limit Number:", num)
         return {
          url: `posts?_limit=${num}`,
          method: 'GET'
         }
        }
       }),


})

})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllPostQuery, useGetPostByIdQuery, useGetPostByLimitQuery } = postApi