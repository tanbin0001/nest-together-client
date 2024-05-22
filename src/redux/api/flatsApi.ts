import { tagTypes } from '../tag-types';
import { baseApi } from './baseApi';
const AUTH_URL = '/auth';

export const authApi = baseApi.injectEndpoints({
   endpoints: (build) => ({


      getAllFlats: build.query({
         query: (data) => ({
            url: `/flats`,
            method: 'POST',
            data ,
         }),
         
      }),
     
   }),
});

export const {
 useGetAllFlatsQuery
 
} = authApi;
