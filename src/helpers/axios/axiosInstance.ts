import { authKey } from '@/contants/authkey';
import setAccessToken from '@/services/actions/setAccessToken';
import { getNewAccessToken } from '@/services/auth.services';
import { IGenericErrorResponse, ResponseSuccessType } from '@/types';
import { getFromLocalStorage, setToLocalStorage } from '@/utils/local-storage';
import axios from 'axios';

const instance = axios.create();
instance.defaults.headers.post['Content-Type'] = 'application/json';
instance.defaults.headers['Accept'] = 'application/json';
instance.defaults.timeout = 60000;

// Add a request interceptor
instance.interceptors.request.use(
   function (config) {
      // Do something before request is sent
      const accessToken = getFromLocalStorage(authKey);

      if (accessToken) {
         config.headers.Authorization = accessToken;
      }
      return config;
   },
   function (error) {
      // Do something with request error
      return Promise.reject(error);
   }
);

// Add a response interceptor
instance.interceptors.response.use(
   //@ts-ignore
   async function (response) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      const responseObject: ResponseSuccessType = {
         data: response?.data,
         meta: response?.data?.meta,
      };
      return responseObject;
   },
    
);

export { instance };
