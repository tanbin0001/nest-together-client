import { baseApi } from "./baseApi";
import { tagTypes } from "../tag-types";

export const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getSingleUser: build.query({
      query: () => ({
        url: "/user/me",
        method: "GET",
      }),
      providesTags: [tagTypes.user],
    }),

    getAllUsers: build.query({
      query: () => ({
        url: "/all-users",
        method: "GET",
      }),
      providesTags: [tagTypes.user],
    }),
    changeUserRoleOrStatus: build.mutation({
      query: (data) => ({
        url: "/update-user-role",
        method: "PATCH",
        data
      }),
      invalidatesTags: [tagTypes.user],
    }),

  }),
});

export const { useGetSingleUserQuery, useGetAllUsersQuery, useChangeUserRoleOrStatusMutation } = userApi;
