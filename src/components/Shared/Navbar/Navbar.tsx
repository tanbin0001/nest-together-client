'use client';

import useUserInfo from '@/hooks/useUserInfo';
import { logoutUser } from '@/services/actions/logoutUser';
import { Box, Button, Container, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Navbar = () => {
   const userInfo = useUserInfo();
   const router = useRouter();

   const handleLogOut = () => {
      logoutUser(router);
   };

   return (
      <Box
         sx={{
            bgcolor: 'primary.main',
         }}
      >
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
                  <Typography
                     component={Link}
                     href='/'
                     color='#ffffff'
                     sx={{ textDecoration: 'none' }}
                  >
                     Home
                  </Typography>

                  <Typography
                     component={Link}
                     href='/about'
                     color='#ffffff'
                     sx={{ textDecoration: 'none' }}
                  >
                     About Us
                  </Typography>

                  {userInfo?.userId ? (
                     <Typography
                        component={Link}
                        href='/profile'
                        color='#ffffff'
                        sx={{ textDecoration: 'none' }}
                     >
                        My Profile
                     </Typography>
                  ) : (
                     <Typography
                        component={Link}
                        href='/login'
                        color='#ffffff'
                        sx={{ textDecoration: 'none' }}
                     >
                        Login/Register
                     </Typography>
                  )}
               </Stack>

               {userInfo?.userId ? (
                  <Button
                     color='error'
                     onClick={handleLogOut}
                     sx={{ boxShadow: 0 }}
                  >
                     Logout
                  </Button>
               ) : null}
            </Stack>
         </Container>
      </Box>
   );
};

export default Navbar;
