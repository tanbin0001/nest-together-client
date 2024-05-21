import { Box, Button, Container, TextField, Typography } from "@mui/material";
import Image from "next/image";
import assets from "@/assets";

const HeroSection = () => {
  return (
    <Box
    sx={{
      backgroundImage: 'url(https://images.unsplash.com/photo-1714145676995-b89ca128ff99?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      color: '#fff',
    }}
  >
    <Container maxWidth="md">
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          sx={{
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
          }}
        >
          Find Your Perfect Flatmate
        </Typography>
        <Typography
          variant="h5"
          component="h1"
          gutterBottom
          sx={{
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
          }}
        >
        Join our community and discover your ideal flat share
      </Typography>
     
    </Container>
  </Box>
  );
};

export default HeroSection;
