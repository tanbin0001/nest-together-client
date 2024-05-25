import { tagTypes } from '../tag-types';
import { baseApi } from './baseApi';
const AUTH_URL = '/auth';

export const authApi = baseApi.injectEndpoints({
   endpoints: (build) => ({


      register: build.mutation({
         query: (data) => ({
            url: `/register`,
            method: 'POST',
            data ,
         }),
         invalidatesTags: [tagTypes.user],
      }),
      userLogin: build.mutation({
         query: (loginData) => ({
            url: `/login`,
            method: 'POST',
            data: loginData,
         }),
         invalidatesTags: [tagTypes.user],
      }),


      changePassword: build.mutation({
         query: (data) => ({
            url: `/change-password`,
            method: 'POST',
            contentType: 'application/json',
            data: data,
         }),
         invalidatesTags: [tagTypes.user],
      }),
     
   }),
});

export const {
   useUserLoginMutation,
   useChangePasswordMutation,
 
   useRegisterMutation
} = authApi;
