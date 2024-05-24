import { tagTypes } from '../tag-types';
import { baseApi } from './baseApi';
const AUTH_URL = '/auth';

export const flatsApi = baseApi.injectEndpoints({
   endpoints: (build) => ({


      getAllFlats: build.query({
         query: () => ({
            url: `/flats`,
            method: 'GET'
         }),
         providesTags:[tagTypes.flats]
      }),
      getSingleFlat: build.query({
         query: (flatId) => ({
            url: `/flats/${flatId}`,
            method: 'GET'
         }),
         providesTags:[tagTypes.flats]
      }),
      postAFlat: build.mutation({
         query: (data) => ({
            url: `/flats`,
            method: 'POST',
            data ,
         }),
         invalidatesTags: [tagTypes.flats],
      }),
   
      updateFlats: build.mutation({
         query: (data) => ({
            url: `/flats/${data.flatId}`,
            method: 'PUT',
            data:data.body ,
         }),
         invalidatesTags: [tagTypes.flats],
      }),
      deleteFlat: build.mutation({
         query: (flatId) => ({
            url: `/flats/${flatId}`,
            method: 'DELETE',
         
         }),
         invalidatesTags: [tagTypes.flats],
      }),
   
   }),
});

export const {
 useGetAllFlatsQuery,
 useGetSingleFlatQuery,
 usePostAFlatMutation,
 useUpdateFlatsMutation,
 useDeleteFlatMutation
 
} = flatsApi;
