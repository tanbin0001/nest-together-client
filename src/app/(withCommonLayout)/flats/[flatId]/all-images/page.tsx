"use client"
import Image from 'next/image';
import React from 'react';
import { usePathname } from 'next/navigation'
import { useGetSingleFlatQuery } from '@/redux/api/flatsApi';
import Spinner from '@/components/UI/Spinner/Spinner';
import { Box, Grid } from '@mui/material';

const AllFlatsImages = ({ imageLinks }: any) => {
    const pathname = usePathname();
    const parts = pathname.split('/');
    const id = parts[2];
    const { data, isLoading } = useGetSingleFlatQuery(id);
    const flat = data?.data;

    if (isLoading) {
        return <Spinner />
    }

    return (
        <Box>
            <Grid container spacing={2}>
                {flat?.imageLinks?.map((image: string, index: number) => (
                    <Grid item xs={12} key={index}>
                        <Image
                            src={image}
                            alt={`Image ${index}`}
                            layout="responsive"
                            width={70}
                            height={70}

                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default AllFlatsImages;
