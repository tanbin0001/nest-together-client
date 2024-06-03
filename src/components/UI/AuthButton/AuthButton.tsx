'use client';

import useUserInfo from '@/hooks/useUserInfo';
import { logoutUser } from '@/services/actions/logoutUser';

import { Button } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const AuthButton = () => {
   const userInfo = useUserInfo();
   console.log(userInfo);
   const router = useRouter();

   const handleLogOut = () => {
      logoutUser(router);
   };
   return (
      <>
         {userInfo?.id ? (
            <Button color='error' onClick={handleLogOut}>
               Logout
            </Button>
         ) : (
            <Button component={Link} href='/login'>
               Login
            </Button>
         )}
      </>
   );
};

export default AuthButton;
