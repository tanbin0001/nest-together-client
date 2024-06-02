

"use client"

import React, { useState } from 'react';
import { Card, CardContent, Typography, CardMedia, Grid, Button, Box } from '@mui/material';
import FlatShareButton from './component/FlatShareButton/FlatShareButton';
import Spinner from '@/components/UI/Loading/Spinner/Spinner';


import { useGetSingleFlatQuery } from '@/redux/api/flatsApi';
import Link from 'next/link';


const FlatDetails = ({ params }: any) => {
    const flatId = params?.flatId;

    const { data, isLoading } = useGetSingleFlatQuery(flatId);
    const flat = data?.data;





    console.log(flat, 'flats from details');


    if (isLoading) {
        return <Spinner />;
    }

    let imagesGrid;
    if (flat.imageLinks.length === 1) {
        imagesGrid = (
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <CardMedia
                        component="img"
                        image={flat.imageLinks[0]}
                        alt="Flat Image"
                        sx={{
                            width: '100%',
                            height: 'auto',
                            borderRadius: '10px',
                            objectFit: 'cover'
                        }}
                    />
                </Grid>
            </Grid>
        );
    } else if (flat.imageLinks.length === 2) {
        imagesGrid = (
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <CardMedia
                        component="img"
                        image={flat.imageLinks[0]}
                        alt="Flat Image 1"
                        sx={{
                            width: '100%',
                            height: 'auto',
                            borderRadius: '10px',
                            objectFit: 'cover'
                        }}
                    />
                </Grid>
                <Grid item xs={6}>
                    <CardMedia
                        component="img"
                        image={flat.imageLinks[1]}
                        alt="Flat Image 2"
                        sx={{
                            width: '100%',
                            height: 'auto',
                            borderRadius: '10px',
                            objectFit: 'cover'
                        }}
                    />
                </Grid>
            </Grid>
        );
    } else {
        imagesGrid = (
            <div style={{ display: 'flex', gap: '10px' }}>
                <div style={{ flex: 2 }}>
                    <CardMedia
                        component="img"
                        image={flat.imageLinks[0]}
                        alt="Flat Image 1"
                        style={{
                            width: '100%',
                            height: '100%',
                            borderRadius: '10px',
                            objectFit: 'cover'
                        }}
                    />
                </div>
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {flat.imageLinks.slice(1, 3).map((image: string, index: number) => (
                        <CardMedia
                            key={index}
                            component="img"
                            image={image}
                            alt={`Flat Image ${index + 2}`}
                            style={{
                                width: '100%',
                                height: '50%',
                                borderRadius: '10px',
                                objectFit: 'cover'
                            }}
                        />
                    ))}
                </div>
            </div>
        );
    }

    return (
        <Card
            sx={{
                display: 'flex',
                flexDirection: 'column',
                marginTop: '20px',
                padding: '20px'
            }}
        >
            {imagesGrid}
            <CardContent>
                <Box sx={{ marginTop: '10px', display: 'flex', justifyContent: 'end', width: '100%' }}>
                    {flat.imageLinks.length > 3 && (
                        <Link href={`/flats/${flatId}/all-images`}>
                            <Button size="small" color="primary"


                                sx={{
                                    fontSize: '10px',
                                    color: 'white',
                                }}

                            >
                                See All Photos
                            </Button>
                        </Link>

                    )}
                </Box>
                <Typography gutterBottom variant="h5" component="div">
                    {flat.location}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    <span className="font-extrabold">Description:</span> {flat.description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    <span className="font-extrabold">Square Feet:</span> {flat.squareFeet}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    <span className="font-extrabold">Total Bedrooms:</span> {flat.totalBedrooms}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    <span className="font-extrabold">Rent:</span> ${flat.rent}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    <span className="font-extrabold">Availability:</span> {flat.availability !== undefined ? flat.availability.toString() : "N/A"}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    <span className="font-extrabold">Amenities:</span> {flat.utilitiesDescription}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    <span className="font-extrabold">Advance Amount:</span> ${flat.advanceAmount}
                </Typography>

                <FlatShareButton flatId={flat.id} />
            </CardContent>

        </Card>
    );
};

export default FlatDetails;
