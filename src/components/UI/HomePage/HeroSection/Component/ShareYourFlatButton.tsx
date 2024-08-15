
"use client"

import { getUserInfo } from '@/services/auth.services';
import { Button } from '@mui/material';
import { useRouter } from 'next/navigation';
import React from 'react';
import { toast } from 'sonner';

const ShareYourFlatButton = () => {
    const userInfo = getUserInfo();
    const router = useRouter();

    const handleShareFlatClick = () => {
        if (userInfo?.id) {
            router.push(`/dashboard/${userInfo?.role}/post-flat-info-to-share`);
        } else {
            toast.error("Please login to share your flats");
            router.push("/login");
        }
    };
    return (
        <Button
            onClick={() => handleShareFlatClick()}
            sx={{
                color: 'black',
                border: '#6db784 solid 1px',
                backgroundColor: '#6db784',
            }}
        >
            Share Your Flat
        </Button>
    );
};

export default ShareYourFlatButton;