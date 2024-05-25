"use client";

import { useReqToShareFlatMutation } from '@/redux/api/bookingReqApi';
import { Button } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import { toast } from 'sonner';
 

const FlatShareButton = ({ flatId }: any) => {
    const [reqToShareFlat] = useReqToShareFlatMutation();
    

    console.log("Flat ID passed to component:", flatId);

  

    // const handleBookingReq = async () => {
    //     const data = { flatId };
    //     console.log("Data to be sent in request:", data);

    //     try {
    //         const res = await reqToShareFlat(data);

    //         if(res?.data?.success === true) {
    //             toast.success(res?.data?.message)
    //         }
    //     } catch (error:any) {
    //         toast.success(error?.message)
    //     }
    // };

    return (
        <div>
            <Button
                component={Link}
                href={`/flats/share-request/${flatId}`}
                // onClick={handleBookingReq}
               
                sx={{
                    color: 'white',
                    fontSize: '12px',
                    mt: '10px',
                }}
            >
                Request to share
            </Button>
        </div>
    );
};

export default FlatShareButton;
