
"use client"

import React, { useState } from 'react';
import { Box, Card, CardContent, CardMedia, Typography, useTheme, Grid, IconButton } from '@mui/material';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const testimonials = [
    {
        name: "Alice Johnson",
        testimonial: "Finding a flatmate was so easy with this site. I found a great match within a week!",
        location: "New York, NY",
        image: "https://randomuser.me/api/portraits/women/1.jpg"
    },
    {
        name: "Michael Smith",
        testimonial: "I was new to the city and this site helped me find a reliable flatmate quickly.",
        location: "San Francisco, CA",
        image: "https://randomuser.me/api/portraits/men/2.jpg"
    },
    {
        name: "Emily Davis",
        testimonial: "Thanks to this service, I met my best friend and flatmate! Highly recommend.",
        location: "Austin, TX",
        image: "https://randomuser.me/api/portraits/women/3.jpg"
    },
    {
        name: "James Wilson",
        testimonial: "Great experience! I found a flatmate who shares similar interests and lifestyle.",
        location: "Seattle, WA",
        image: "https://randomuser.me/api/portraits/men/4.jpg"
    },
    {
        name: "Laura Brown",
        testimonial: "The website helped me find a flatmate who turned out to be a great friend too!",
        location: "Boston, MA",
        image: "https://randomuser.me/api/portraits/women/4.jpg"
    },
    {
        name: "Daniel Garcia",
        testimonial: "Quick and easy to find a trustworthy flatmate. Highly recommend this service!",
        location: "Chicago, IL",
        image: "https://randomuser.me/api/portraits/men/3.jpg"
    }
];

const TestimonialsSlider = () => {
    const theme = useTheme();
    const [index, setIndex] = useState(0);

    const handleChangeIndex = (index: number) => {
        setIndex(index);
    };

    const handleNext = () => {
        setIndex((prevIndex) => (prevIndex + 1) % Math.ceil(testimonials.length / 3));
    };

    const handleBack = () => {
        setIndex((prevIndex) => (prevIndex - 1 + Math.ceil(testimonials.length / 3)) % Math.ceil(testimonials.length / 3));
    };

    return (
        <Box sx={{
            my: 10
        }}>
            <Typography sx={{
                fontSize: {
                    lg: 40,
                    md: 30,
                    sm: 20,
                    xs: 20
                }, fontWeight: 'bold', textAlign: 'center', my: 5, color: 'gray'
            }}>Our Happy <span className='text-[#6db784]'>Clients</span></Typography>
            <Box sx={{ maxWidth: 1000, flexGrow: 1, margin: 'auto' }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <IconButton onClick={handleBack} aria-label="ArrowBackIosIcon" color="primary">
                        <ArrowBackIosIcon />
                    </IconButton>
                    <AutoPlaySwipeableViews index={index} onChangeIndex={handleChangeIndex} interval={4000}>
                        {Array.from({ length: Math.ceil(testimonials.length / 3) }).map((_, pageIndex) => (
                            <Grid container key={pageIndex} spacing={2} justifyContent="center" alignItems="center">
                                {testimonials.slice(pageIndex * 3, pageIndex * 3 + 3).map((testimonial, index) => (
                                    <Grid item xs={12} sm={6} md={4} key={index}>
                                        <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', borderRadius: 5, padding: 2, }}>
                                            <CardMedia
                                                component="img"
                                                sx={{ width: 80, height: 80, borderRadius: '50%' }}
                                                image={testimonial.image}
                                                alt={testimonial.name}
                                            />
                                            <Box sx={{ display: 'flex', flexDirection: 'column', mt: 2 }}>
                                                <CardContent>
                                                    <Typography component="div" variant="h6" sx={{ textAlign: 'center' }}>
                                                        {testimonial.name}
                                                    </Typography>
                                                    <Typography variant="body2" color="text.secondary" component="div" sx={{ textAlign: 'center' }}>
                                                        {testimonial.location}
                                                    </Typography>
                                                    <Typography variant="body1" component="div" sx={{ textAlign: 'center' }}>
                                                        &quot;{testimonial.testimonial}&quot;
                                                    </Typography>
                                                </CardContent>
                                            </Box>
                                        </Card>
                                    </Grid>
                                ))}
                            </Grid>
                        ))}
                    </AutoPlaySwipeableViews>
                    <IconButton onClick={handleNext} aria-label="ArrowForwardIosIcon" color="primary">
                        <ArrowForwardIosIcon />
                    </IconButton>
                </Box>
            </Box>
        </Box>
    );
};

export default TestimonialsSlider;
