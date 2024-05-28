 
'use client';

import { Box, Container, Typography, Grid, Avatar, Link } from '@mui/material';
import facebookIcon from '../../../assets/landing_page/facebook.png'
import instagramIcon from '../../../assets/landing_page/instagram.png'
import twitterIcon from '../../../assets/landing_page/twitter.png'
import Image from 'next/image';
 
const AboutUs = () => {
  return (
    <Container>
      <Box my={4} p={2}>
        {/* Mission Statement */}
        <Typography variant="h4" gutterBottom align="center">
          Our Mission
        </Typography>
        <Typography variant="body1" align="center" paragraph>
          At Nest Together, our mission is to make finding a shared flat easy, affordable, and convenient. We aim to connect individuals looking for flatmates and provide a seamless experience for everyone involved. Our goal is to foster a community where people can find not just a place to live, but a place to call home.
        </Typography>

         {/* Team Information */}
         <Typography variant="h4" gutterBottom align="center" mt={4}>
          Meet the Team
        </Typography>
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


        {/* Contact Information */}
        <Typography variant="h4" gutterBottom align="center" mt={4}>
          Contact Us
        </Typography>
        <Typography variant="body1" align="center">
          We&apos;d love to hear from you! Whether you have questions, feedback, or just want to say hello, feel free to reach out to us through any of the following channels:
        </Typography>
        <Box textAlign="center" mt={2}>
          <Typography variant="body1" paragraph>
            Email: <Link href="mailto:info@nesttogether.com">info@nesttogether.com</Link>
          </Typography>
          <Typography variant="body1" paragraph>
            Phone: +1 (123) 456-7890
          </Typography>
          <Typography variant="body1" paragraph>
            Follow us on social media:
          </Typography>
          <Box display="flex" justifyContent="center" gap={2}>
            <Link href="https://facebook.com" target="_blank" rel="noopener">
              <Image src={facebookIcon} alt="Facebook" width="30" />
            </Link>
            <Link href="https://twitter.com" target="_blank" rel="noopener">
            <Image src={twitterIcon} alt="Twitter" width="30" />
            </Link>
            <Link href="https://instagram.com" target="_blank" rel="noopener">
            <Image src={instagramIcon} alt="Instagram" width="30" />
            </Link>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default AboutUs;
