import { FieldValues } from 'react-hook-form';
import setAccessToken from './setAccessToken';

export const userLogin = async (data: FieldValues) => {
   console.log("Login data:", data);
   try {
      const res = await fetch(
         `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/login`,
         {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
            credentials: 'include',
         }
      );
      
      const userInfo = await res.json();
      console.log("Response from login API:", userInfo);

      if (userInfo?.data?.result?.token) {
         console.log("Token received:", userInfo?.data?.result?.token);
         setAccessToken(userInfo?.data?.result?.token, {
            redirect: '/dashboard',
         });
      } else {
         console.log("No token received, login failed:", userInfo);
      }

      return userInfo;
   } catch (error) {
      console.error("Error during login fetch:", error);
      throw error;
   }
};
