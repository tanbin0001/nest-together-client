 
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

                    <span className="font-extrabold">Description:</span> {flat.description}
                </Typography>
 
                <Typography variant="body2" color="text.secondary">
                  
                    <span className="font-extrabold">  Square Feet:</span> {flat.squareFeet}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  
                    <span className="font-extrabold"> Total Bedrooms:</span> {flat.totalBedrooms}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                   
                    <span className="font-extrabold"> Rent:</span> ${flat.rent}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    
                     <span className="font-extrabold">  Availability: </span>{flat.availability ? 'Available' : 'Not Available'}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    
                     <span className="font-extrabold">  Utilities: </span>{flat.utilitiesDescription}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                     
                     <span className="font-extrabold">  Advance Amount: </span>${flat.advanceAmount}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default FlatDetails;
