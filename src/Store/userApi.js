import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'



export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
  endpoints: (builder) => ({
    getUserPosts: builder.query({
      query: () => "/posts",
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetUserPostsQuery } = usersApi