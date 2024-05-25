"use client";

import { useReqToShareFlatMutation } from '@/redux/api/bookingReqApi';
import { Button } from '@mui/material';
import Link from 'next/link';
import React from 'react';
 
 

const FlatShareButton = ({ flatId }: any) => {

    

    console.log("Flat ID passed to component:", flatId);

  


    return (
        <div>
            <Button
                component={Link}
                href={`/flats/share-request/${flatId}`}
             
               
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
