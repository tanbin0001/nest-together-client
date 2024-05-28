import React from 'react';
import { Box, Container, Typography, Link, Grid, IconButton } from '@mui/material';
import { Facebook, Instagram, Twitter, LinkedIn } from '@mui/icons-material';

const Footer = () => {
    return (
        <Box bgcolor="primary.main" color="white" py={4} mt={4}>
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    {/* Company Info */}
                    <Grid item xs={12} md={4}>
                        <Typography variant="h6" gutterBottom>
                            Nest Together
                        </Typography>
                        <Typography variant="body2" paragraph>
                            Making flat sharing easy, affordable, and convenient. Find your perfect flatmate today!
                        </Typography>
                    </Grid>
                    
                    {/* Quick Links */}
                    <Grid item xs={12} md={4}>
                        <Typography variant="h6" gutterBottom>
                            Quick Links
                        </Typography>
                        <Box>
                            <Link href="#" color="inherit" underline="none">
                                <Typography variant="body2" paragraph>
                                    Home
                                </Typography>
                            </Link>
                            <Link href="#" color="inherit" underline="none">
                                <Typography variant="body2" paragraph>
                                    About Us
                                </Typography>
                            </Link>
                            <Link href="#" color="inherit" underline="none">
                                <Typography variant="body2" paragraph>
                                    Contact Us
                                </Typography>
                            </Link>
                            <Link href="#" color="inherit" underline="none">
                                <Typography variant="body2" paragraph>
                                    Privacy Policy
                                </Typography>
                            </Link>
                        </Box>
                    </Grid>
                    
                    {/* Contact Info */}
                    <Grid item xs={12} md={4}>
                        <Typography variant="h6" gutterBottom>
                            Contact Us
                        </Typography>
                        <Typography variant="body2" paragraph>
                            Email: <Link href="mailto:info@nesttogether.com" color="inherit">info@nesttogether.com</Link>
                        </Typography>
                        <Typography variant="body2" paragraph>
                            Phone: +1 (123) 456-7890
                        </Typography>
                        <Box mt={2}>
                            <IconButton href="https://facebook.com" target="_blank" rel="noopener" color="inherit">
                                <Facebook />
                            </IconButton>
                            <IconButton href="https://twitter.com" target="_blank" rel="noopener" color="inherit">
                                <Twitter />
                            </IconButton>
                            <IconButton href="https://instagram.com" target="_blank" rel="noopener" color="inherit">
                                <Instagram />
                            </IconButton>
                            <IconButton href="https://linkedin.com" target="_blank" rel="noopener" color="inherit">
                                <LinkedIn />
                            </IconButton>
                        </Box>
                    </Grid>
                </Grid>
                <Box textAlign="center" mt={4}>
                    <Typography variant="body2">
                        &copy; {new Date().getFullYear()} Nest Together. All rights reserved.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
