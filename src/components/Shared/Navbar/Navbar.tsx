
'use client';


import React, { useState } from 'react';
import useUserInfo from '@/hooks/useUserInfo';
import { logoutUser } from '@/services/actions/logoutUser';
import { Box, Button, Container, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

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
                  variant='h4'
                  component={Link}
                  href='/'
                  fontWeight={600}
                  color='inherit'
                  sx={{ textDecoration: 'none' }}
               >
                  Nest Together
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

                  {userInfo?.id ? (
                     <Link href={`/dashboard/${userInfo.role}/profile`} passHref>
                        <Typography
                           component="a"
                           color={activeLink === `/dashboard/${userInfo.role}/profile` ? 'primary.main' : 'inherit'}
                           onClick={() => handleLinkClick(`/dashboard/${userInfo.role}/profile`)}
                        >
                           My Profile
                        </Typography>
                     </Link>
                  ) : (
                     <Link href='/login' passHref>
                        <Typography
                           component="a"
                           color={activeLink === '/login' ? 'primary.main' : 'inherit'}
                           onClick={() => handleLinkClick('/login')}
                        >
                           Login
                        </Typography>
                     </Link>
                  )}
               </Stack>

               {userInfo?.id ? (
                  <Button color='error' onClick={handleLogOut} sx={{ boxShadow: 0 }}>
                     Logout
                  </Button>
               ) : null}
            </Stack>
         </Container>
      </Box>
   );
};

export default Navbar;
