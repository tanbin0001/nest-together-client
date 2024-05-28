import { baseApi } from './baseApi';
import { tagTypes } from '../tag-types';

export const profileAPi = baseApi.injectEndpoints({
   endpoints: (build) => ({
      getMYProfile: build.query({
         query: () => {
            return {
               url: '/profile',
               method: 'GET',
            };
         },
         providesTags: [tagTypes.user],
      }),
      updateMYProfile: build.mutation({
         query: (data) => {
            return {
               url: '/profile',
               method: 'PUT',
               data,
             
            };
         },
         invalidatesTags: [tagTypes.user],
      }),
   }),
});

export const { useGetMYProfileQuery, useUpdateMYProfileMutation } = profileAPi;
