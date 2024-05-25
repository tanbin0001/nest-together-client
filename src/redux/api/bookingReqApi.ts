import { tagTypes } from '../tag-types';
import { baseApi } from './baseApi';
 

export const bookingApi = baseApi.injectEndpoints({
   endpoints: (build) => ({


      getAllBookingRequests: build.query({
         query: () => ({
            url: `/booking-requests`,
            method: 'GET'
         }),
         providesTags:[tagTypes.bookings]
      }),


      reqToShareFlat: build.mutation({
         query: (data) => {
             console.log('Data being sent:', data);  
             return {
                 url: `/booking-applications`,
                 method: 'POST',
                 data,  
             };
         },
         invalidatesTags: [tagTypes.bookings],
     }),
     
  
   
   }),
});

export const {
 useGetAllBookingRequestsQuery,
 useReqToShareFlatMutation
 
 
} = bookingApi;
