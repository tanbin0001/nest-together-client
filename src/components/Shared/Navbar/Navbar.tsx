
'use client';


import React, { useState } from 'react';
import useUserInfo from '@/hooks/useUserInfo';
import { logoutUser } from '@/services/actions/logoutUser';
import { Box, Button, Container, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import AuthButton from '@/components/UI/AuthButton/AuthButton';
// import AuthButton from '@/components/UI/AuthButton/AuthButton';

const Navbar = () => {
   const userInfo = useUserInfo();
   const router: any = useRouter();
   const [activeLink, setActiveLink] = useState(router.pathname);

   const handleLogOut = () => {
      logoutUser(router);
   };

   const handleLinkClick = (path: any) => {
      setActiveLink(path);
   };


   // const AuthButton = dynamic(() => import('@/components/UI/AuthButton/AuthButton'), {
   //    ssr: false,
   // })
   return (
      <Box sx={{ bgcolor: 'white' }}>
         <Container>
            <Stack
               py={2}
               direction='row'
               justifyContent='space-between'
               alignItems='center'
            >

               <Typography
                  variant="h4"
                  component={Link}
                  href="/"
                  fontWeight={600}
                  color="#6db784"
                  sx={{
                     textDecoration: 'none',
                     display: 'flex',
                     alignItems: 'center'
                  }}
               >
                  <Image
                     src="/assets/logo.png"
                     width={50}
                     height={50}
                     alt="logo"
                  />
                  <Box component="span" sx={{ marginLeft: 1 }}>
                     Nest Together
                  </Box>
               </Typography>

               <Stack direction='row' justifyContent='space-between' gap={4}>
                  <Link href='/' passHref>
                     <Typography
                        component="a"
                        color={activeLink === '/' ? 'primary.main' : 'inherit'}
                        onClick={() => handleLinkClick('/')}
                     >
                        Home
                     </Typography>
                  </Link>

                  <Link href='/about-us' passHref>
                     <Typography
                        component="a"
                        color={activeLink === '/about-us' ? 'primary.main' : 'inherit'}
                        onClick={() => handleLinkClick('/about-us')}
                     >
                        About Us
                     </Typography>
                  </Link>



                  {userInfo?.id && <Link href={`/dashboard/${userInfo.role}/profile`} passHref>

                     My Profile

                  </Link>}
               </Stack>
               {/* <AuthButton /> */}
               {userInfo?.id ? (
                  <Button color='error' onClick={handleLogOut}>
                     Logout
                  </Button>
               ) : (
                  <Button component={Link} href='/login'>
                     Login
                  </Button>
               )}
            </Stack>
         </Container>
      </Box>
   );
};

// export default Navbar;
export default dynamic(() => Promise.resolve(Navbar), { ssr: false })

