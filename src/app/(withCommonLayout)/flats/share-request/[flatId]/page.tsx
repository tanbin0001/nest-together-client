 
'use client'

 

import React, { useEffect, useState } from 'react';
import { Button, TextField, Checkbox, FormControlLabel, Grid, Typography } from "@mui/material";
import { toast } from "sonner";
import { getUserInfo } from '@/services/auth.services';
import { useGetSingleFlatQuery } from '@/redux/api/flatsApi';
import Spinner from '@/components/UI/Spinner/Spinner';
import { useRouter } from 'next/navigation';
import { useReqToShareFlatMutation } from '@/redux/api/bookingReqApi';

const FlatShareRequest = ({ params }:any) => {
    const {flatId} =params
    const [reqToShareFlat,{isLoading:mutationLoading}] = useReqToShareFlatMutation();
    const user = getUserInfo()

    const [agreedToTerms, setAgreedToTerms] = useState(false);
    const {data,isLoading} = useGetSingleFlatQuery(flatId);
    const flat = data?.data;
const router = useRouter();
 

    useEffect(() => {
        if (!user) {
            toast.error('Please Login first to share flat!')
            router.push('/login');
        }
    }, [user, router]);

    const handleBookingReq = async (event:any) => {
        event.preventDefault();
        const data = { flatId };
    

        try {
            const res = await reqToShareFlat(data);
     
            if(res?.data?.success === true) {
                toast.success(res?.data?.message)
                setAgreedToTerms(false)
            }
        } catch (error:any) {
            toast.success(error?.message)
        }
    };
    if(isLoading  || mutationLoading){
        return <Spinner/>
    }
    return (
        <div className=' flex justify-center items-center border min-h-screen min-w-[300px]'>
            <form onSubmit={handleBookingReq}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="Email"
                            value={user?.email}
                            fullWidth
                            InputProps={{
                                readOnly: true,
                            }}
                          
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="Flat Location"
                            value={flat?.location || ''}
                            fullWidth
                            InputProps={{
                                readOnly: true,
                            }}
                          
                        />
                    </Grid>
                    <Grid item  xs={12} sm={6} >
                        <TextField
                            label="Advance Amount"
                            value={flat?.advanceAmount}
                            
                            InputProps={{
                                readOnly: true,
                            }}
                          
                            fullWidth
                        />
                    </Grid>
                    <Grid item  xs={12} sm={6}>
                        <TextField
                            label="Rent"
                            value={flat?.rent}
                            
                            InputProps={{
                                readOnly: true,
                            }}
                          
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={agreedToTerms}
                                    onChange={(e) => setAgreedToTerms(e.target.checked)}
                                />
                            }
                            label="I agree to the terms and conditions"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button   disabled={!agreedToTerms}
                            type="submit"
                            variant="contained"
                            color="primary">
                            Submit
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </div>
    );
};

export default FlatShareRequest;
