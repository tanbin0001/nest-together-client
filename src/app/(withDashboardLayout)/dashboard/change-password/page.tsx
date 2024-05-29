'use client';

import PHForm from '@/components/Forms/PHForm';
import PHInput from '@/components/Forms/PHInput';

import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import { FieldValues } from 'react-hook-form';
import { z } from 'zod';
import KeyIcon from '@mui/icons-material/Key';
import { useChangePasswordMutation } from '@/redux/api/authApi';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { logoutUser } from '@/services/actions/logoutUser';
import Spinner from '@/components/UI/Spinner/Spinner';
import { zodResolver } from '@hookform/resolvers/zod';

// Validation schema
const validationSchema = z.object({
   oldPassword: z.string().min(1, "Please enter your old password"),
   newPassword: z.string().min(6, "New password must be at least 6 characters long"),
   confirmNewPassword: z.string().min(6, "Confirm new password must be at least 6 characters long"),
}).refine(data => data.newPassword === data.confirmNewPassword, {
   message: "Passwords do not match",
   path: ["confirmNewPassword"],
});

const defaultValues = {
   oldPassword: '',
   newPassword: '',
   confirmNewPassword: '',
};

const ChangePassword = () => {
   const [changePassword, { isLoading }] = useChangePasswordMutation();
   const router = useRouter();

   const onSubmit = async (values: FieldValues) => {
      try {
         const { confirmNewPassword, ...rest } = values;
         const res: any = await changePassword(rest);

         if (res?.data?.success === true) {
            logoutUser(router);
            toast.success('Password Changed Successfully');
         } else if (res?.error) {
            toast.error('Incorrect Old Password');
         }
      } catch (error: any) {
         console.log(error);
      }
   };

   if (isLoading) {
      return <Spinner />;
   }

   return (
      <Box
         sx={{
            px: 4,
            py: 2,
            maxWidth: 600,
            width: '100%',
            boxShadow: 1,
            borderRadius: 1,
            mx: 'auto',
            mt: {
               xs: 2,
               md: 5,
            },
         }}
      >
         <Stack alignItems='center' justifyContent='center'>
            <Box
               sx={{
                  '& svg': {
                     width: 100,
                     height: 100,
                  },
               }}
            >
               <KeyIcon sx={{ color: 'primary.main' }} />
            </Box>
            <Typography variant='h5' fontWeight={600} sx={{ mb: 2, mt: -1.5 }}>
               Change password
            </Typography>
         </Stack>
         <PHForm
            onSubmit={onSubmit}
            resolver={zodResolver(validationSchema)}
            defaultValues={defaultValues}
         >
            <Grid container spacing={2}>
               <Grid item xs={12}>
                  <PHInput
                     name='oldPassword'
                     type='password'
                     label='Old Password'
                     fullWidth
                     sx={{ mb: 2 }}
                  />
               </Grid>
               <Grid item xs={12}>
                  <PHInput
                     name='newPassword'
                     type='password'
                     label='New Password'
                     fullWidth
                     sx={{ mb: 2 }}
                  />
               </Grid>
               <Grid item xs={12}>
                  <PHInput
                     name='confirmNewPassword'
                     type='password'
                     label='Confirm New Password'
                     fullWidth
                     sx={{ mb: 2 }}
                  />
               </Grid>
            </Grid>

            <Button type='submit' sx={{ width: '100%', my: 2 }}>
               Change Password
            </Button>
         </PHForm>
      </Box>
   );
};

export default ChangePassword;
