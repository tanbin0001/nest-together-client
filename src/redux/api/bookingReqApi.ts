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
     
    //   getSingleFlat: build.query({
    //      query: (flatId) => ({
    //         url: `/flats/${flatId}`,
    //         method: 'GET'
    //      }),
    //      providesTags:[tagTypes.flats]
    //   }),

   
    //   updateFlats: build.mutation({
    //      query: (data) => ({
    //         url: `/flats/${data.flatId}`,
    //         method: 'PUT',
    //         data:data.body ,
    //      }),
    //      invalidatesTags: [tagTypes.flats],
    //   }),
    //   deleteFlat: build.mutation({
    //      query: (flatId) => ({
    //         url: `/flats/${flatId}`,
    //         method: 'DELETE',
         
    //      }),
    //      invalidatesTags: [tagTypes.flats],
    //   }),
   
   }),
});

export const {
 useGetAllBookingRequestsQuery,
 useReqToShareFlatMutation
 
 
} = bookingApi;
