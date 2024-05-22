 
import React from 'react';
import { Card, CardContent, Typography, CardMedia } from '@mui/material';

const FlatDetails = async ({ params }: any) => {
    const flatId = params?.flatId;

    const res = await fetch(`http://localhost:5000/api/flats/${flatId}`);
    const { data: flat } = await res.json();

    return (
        <Card sx={{
            display:'flex',
            marginTop:'20px'
       
             
        }} >
            <CardMedia
            sx={{
                width:'500px'
            }}
                component="img"
                 
                image={flat.imageLink}
                alt="Flat Image"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {flat.location}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Description: {flat.description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Square Feet: {flat.squareFeet}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Total Bedrooms: {flat.totalBedrooms}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Rent: {flat.rent}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Availability: {flat.availability ? 'Available' : 'Not Available'}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Utilities: {flat.utilitiesDescription}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Advance Amount: {flat.advanceAmount}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default FlatDetails;
