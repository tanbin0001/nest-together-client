

'use client';

import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Avatar } from '@mui/material';
import { styled } from '@mui/system';

const facts = [
  { title: "Active Listings Worldwide", value: "7.7M+", description: "as of December 31, 2023" },
  { title: "Cities and Towns Active Listings", value: "100K+", description: "as of December 31, 2023" },
  { title: "Countries and Regions Listings", value: "220+", description: "as of December 31, 2023" },
  { title: "Airbnb Guest Arrivals All-Time", value: "1.5B+", description: "as of December 31, 2023" },
  { title: "Hosts on Airbnb", value: "5M+", description: "as of December 31, 2023" },
  { title: "Earned by Hosts All-Time", value: "$250B+", description: "as of December 31, 2023" },
  { title: "Earned by the  US in 2023", value: "$14K", description: "as of December 31, 2023" },
  { title: "Total Taxes Collected Globally", value: "$10B+", description: "as of December 31, 2023" },
];

const Section = styled(Box)(({ theme }) => ({
  padding: theme.spacing(6, 0),
  backgroundColor: theme.palette.background.default,
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  color: theme.palette.primary.main,
  marginBottom: theme.spacing(4),
  textAlign: 'center',
}));

const FastFactsCard = styled(Card)(({ theme }) => ({
  maxWidth: 345,
  margin: 'auto',
  backgroundColor: theme.palette.background.paper,
}));

const AboutUs = () => {
  return (
    <Container>
      <Section>
        <SectionTitle variant="h4">       Our Mission</SectionTitle>

        <Typography variant="body1" align="center" paragraph>
          At Nest Together, our mission is to make finding a shared flat easy, affordable, and convenient. We aim to connect individuals looking for flatmates and provide a seamless experience for everyone involved. Our goal is to foster a community where people can find not just a place to live, but a place to call home.
        </Typography>
        <SectionTitle sx={{
          mt: 10
        }} variant="h4">Fast Facts</SectionTitle>



        <Grid container spacing={4}>
          {facts.map((fact, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <FastFactsCard>
                <CardContent>
                  <Typography variant="h5" component="div" gutterBottom>
                    {fact.value}
                  </Typography>
                  <Typography variant="body1" color="textSecondary">
                    {fact.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {fact.description}
                  </Typography>
                </CardContent>
              </FastFactsCard>
            </Grid>
          ))}
        </Grid>

        <SectionTitle sx={{
          mt: 10,

        }} variant="h4"> Meet the Team</SectionTitle>

        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <Box textAlign="center">
              <Avatar src="/assets/team/person1.avif" alt="Team Member 1" sx={{ width: 100, height: 100, mx: 'auto' }} />
              <Typography variant="h6" gutterBottom mt={2}>
                Sharlet Rose
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Founder & CEO
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box textAlign="center">
              <Avatar src="/assets/team/person2.avif" alt="Team Member 2" sx={{ width: 100, height: 100, mx: 'auto' }} />
              <Typography variant="h6" gutterBottom mt={2}>
                Yami Sukehero
              </Typography>
              <Typography variant="body2" color="textSecondary">
                CTO
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box textAlign="center">
              <Avatar src="/assets/team/person3.avif" alt="Team Member 3" sx={{ width: 100, height: 100, mx: 'auto' }} />
              <Typography variant="h6" gutterBottom mt={2}>
                Asta
              </Typography>
              <Typography variant="body2" color="textSecondary">
                COO
              </Typography>
            </Box>
          </Grid>
        </Grid>




      </Section>
    </Container>
  );
};

export default AboutUs;
