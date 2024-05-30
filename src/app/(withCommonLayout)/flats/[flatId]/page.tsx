
import React from 'react';
import { Card, CardContent, Typography, CardMedia, Grid } from '@mui/material';
import FlatShareButton from './component/FlatShareButton/FlatShareButton';
import Spinner from '@/components/UI/Spinner/Spinner';

const FlatDetails = async ({ params }: any) => {
    const flatId = params?.flatId;

    const res = await fetch(`http://localhost:5000/api/flats/${flatId}`);
    const { data: flat } = await res.json();

    console.log(flat, 'flats from details');

    if (!flat) {
        return <Spinner />;
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
            {flat.imageLinks.length === 1 ? (
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
            ) : flat.imageLinks.length === 2 ? (
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
            ) : (
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
            )}
            <CardContent>
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
