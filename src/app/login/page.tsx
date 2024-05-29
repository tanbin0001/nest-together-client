'use client';
import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { storeUserInfo } from '@/services/auth.services';
import { toast } from 'sonner';
import PHForm from '@/components/Forms/PHForm';
import PHInput from '@/components/Forms/PHInput';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState, useEffect } from 'react';
import { useUserLoginMutation } from '@/redux/api/authApi';
import { userLogin } from '@/services/actions/userLogin';
import { useRouter } from 'next/navigation';
import Spinner from '@/components/UI/Spinner/Spinner';

export const validationSchema = z.object({
   email: z.string().email('Please enter a valid email address!'),
   password: z.string(),
});

const LoginPage = () => {
   const [error, setError] = useState('');
   const [loading, setLoading] = useState(false);
   const [redirectedRoute, setRedirectedRoute] = useState<string | null>(null);

   useEffect(() => {
      if (typeof window !== 'undefined') {
         setRedirectedRoute(window.location.href);
      }
   }, []);

   const router = useRouter();
   const handleLogin = async (values: FieldValues) => {
      try {
         setLoading(true);
         const res = await userLogin(values);

         if (res?.data?.result?.token) {
            toast.success(res?.message);
            storeUserInfo({ accessToken: res?.data?.result?.token });
            setLoading(false);
            if (redirectedRoute) {
               if (redirectedRoute === 'http://localhost:3000/login' || redirectedRoute === 'http://localhost:3000/register') {
                  router.push('/dashboard');
               } else {
                  router.push(redirectedRoute);
               }
            } else {
               router.push('/dashboard');
            }
         } else {
            setLoading(false);
            setError(res?.message || 'Login failed');
         }
      } catch (err: any) {
         console.error(err.message);
         setLoading(false);
      }
   };

   if (loading) {
      return <Spinner />;
   }

   return (
      <Container>
         <Stack
            sx={{
               height: '100vh',
               justifyContent: 'center',
               alignItems: 'center',
            }}
         >
            <Box
               sx={{
                  maxWidth: 600,
                  width: '100%',
                  boxShadow: 1,
                  borderRadius: 1,
                  p: 4,
                  textAlign: 'center',
               }}
            >
               <Stack
                  sx={{
                     justifyContent: 'center',
                     alignItems: 'center',
                  }}
               >
                  <Box>
                     <Image
                        src="/assets/logo.png"
                        width={50}
                        height={50}
                        alt='logo'
                     />
                  </Box>
                  <Box>
                     <Typography variant='h6' fontWeight={600}>
                        Login Nest Together
                     </Typography>
                  </Box>
               </Stack>

               {error && (
                  <Box>
                     <Typography
                        sx={{
                           backgroundColor: 'red',
                           padding: '1px',
                           borderRadius: '2px',
                           color: 'white',
                           marginTop: '5px',
                        }}
                     >
                        {error}
                     </Typography>
                  </Box>
               )}

               <Box>
                  <PHForm
                     onSubmit={handleLogin}
                     resolver={zodResolver(validationSchema)}
                     defaultValues={{
                        email: '',
                        password: '',
                     }}
                  >
                     <Grid container spacing={2} my={1}>
                        <Grid item md={6}>
                           <PHInput
                              name='email'
                              label='Email'
                              type='email'
                              fullWidth={true}
                           />
                        </Grid>
                        <Grid item md={6}>
                           <PHInput
                              name='password'
                              label='Password'
                              type='password'
                              fullWidth={true}
                           />
                        </Grid>
                     </Grid>
                     <Button
                        sx={{
                           margin: '10px 0px',
                        }}
                        fullWidth={true}
                        type='submit'
                     >
                        Login
                     </Button>
                     <Typography component='p' fontWeight={300}>
                        Don&apos;t have an account?{' '}
                        <Link href='/register'>Create an account</Link>
                     </Typography>
                  </PHForm>
               </Box>
            </Box>
         </Stack>
      </Container>
   );
};

export default LoginPage;
