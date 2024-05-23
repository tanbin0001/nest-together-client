import { tagTypes } from '../tag-types';
import { baseApi } from './baseApi';
const AUTH_URL = '/auth';

export const authApi = baseApi.injectEndpoints({
   endpoints: (build) => ({


      getAllFlats: build.query({
         query: () => ({
            url: `/flats`,
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
   
   }),
});

export const {
 useGetAllFlatsQuery,
 usePostAFlatMutation
 
} = authApi;
