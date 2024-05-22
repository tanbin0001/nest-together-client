import { Box, Button, Container, TextField, Typography } from "@mui/material";
import Image from "next/image";
import home from '../../../../assets/hero section.png'
const HeroSection = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Diagonal Split Background */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, #6db784 50%, white 50%)',
          clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
          zIndex: -2,
        }}
      />

      {/* Overlaying Shapes */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, rgba(109, 183, 132, 0.6) 50%, rgba(255, 255, 255, 0.6) 50%)',
          clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
          zIndex: -1,
        }}
      />

      <Container maxWidth="md" sx={{
        textAlign:'start'
      }}>
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          sx={{
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
            color: '#fff',
          }}
        >
          Find Your Perfect Flatmate
        </Typography>
        <Typography
          variant="h5"
          component="h2"
          gutterBottom
          sx={{
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
            color: '#fff',
          }}
        >
          Join our community and discover your ideal flat share
        </Typography>
       <Button sx={{
        color:'black',border:'#6db784 solid 1px', backgroundColor:'white'
       }}>Share Your FLat</Button>
      </Container>

      <Container sx={{
         display:'flex',
         justifyContent:'center'
      }}>
         <Image src={home} alt="home image" width={500} height={500}/>
      </Container>
    </Box>
  );
};

export default HeroSection;
