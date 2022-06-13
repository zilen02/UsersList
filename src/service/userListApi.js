import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://reqres.in/api/users";

export const userListApi = createApi({
  reducerPath: "userListApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: (page) => ({
        url: `?page=${page}`,
      }),
    }),
    getUserDetails: builder.query({
      query: (userId) => ({
        url: `/${userId}`,
      }),
    }),
  }),
});

export const { useGetUsersQuery, useGetUserDetailsQuery } = userListApi;
