 
'use client'

 

import React, { useEffect, useState } from 'react';
import { Button, TextField, Checkbox, FormControlLabel, Grid, Typography } from "@mui/material";
import { toast } from "sonner";
import { getUserInfo } from '@/services/auth.services';
import { useGetSingleFlatQuery } from '@/redux/api/flatsApi';
import Spinner from '@/components/UI/Spinner/Spinner';
import { useRouter } from 'next/navigation';

const FlatShareRequest = ({ params }:any) => {
    const {flatId} =params
    const user = getUserInfo()

    const [agreedToTerms, setAgreedToTerms] = useState(false);
    const {data,isLoading} = useGetSingleFlatQuery(flatId);
    const flat = data?.data;
const router = useRouter();

    console.log(
        agreedToTerms
    );

    useEffect(() => {
        if (!user) {
            toast.error('Please Login first to share flat!')
            router.push('/login');
        }
    }, [user, router]);

    const handleSubmit = (event:any) => {
        event.preventDefault();

        if (!agreedToTerms) {
            toast.error("You must agree to the terms and conditions to submit the request.");
            return;
        }

      

     
        toast.success("Flat share request submitted successfully!");
    };
    if(isLoading){
        return <Spinner/>
    }
    return (
        <div className=' flex justify-center items-center border min-h-screen min-w-[300px]'>
            <form onSubmit={handleSubmit}>
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
