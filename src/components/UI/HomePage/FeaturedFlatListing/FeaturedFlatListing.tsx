import { Box, Container, Typography, Button } from '@mui/material';
import Image from 'next/image';
import featuredImage from '../../../../../public/assets/featuredFlat.avif';

const FeaturedFlatListing = () => {
  return (
    <Box  >
      <Box my={4} p={2} display="flex" flexDirection={{ xs: 'column', md: 'row' }} alignItems="center" justifyContent="center" mx="auto">


        <Box flex={1} p={4}>
          <Typography sx={{
            fontSize: {
              lg: 40,
              md: 30,
              sm: 30,
              xs: 30
            }, fontWeight: 'bold', my: 5, color: 'gray'
          }}>
            Featured <span className='text-[#6db784]'>Flats</span>
          </Typography>
          <Typography variant="body1" paragraph>
            Discover our handpicked selection of the finest flats available for sharing. Each property is carefully vetted to ensure it meets our high standards of quality and comfort.
          </Typography>
          <Typography variant="body1" paragraph>
            Whether you’re looking for a cozy room in a bustling city or a serene space in the suburbs, we have something to match your needs. Experience the perfect blend of affordability and luxury with our featured flats.
          </Typography>
          <Button variant="contained" color="primary" href="/about-us" size="large">
            Explore about us
          </Button>
        </Box>


        <Box flex={1} textAlign="center" display="flex" justifyContent={{ xs: 'center', md: 'flex-end' }}>
          <Image src={featuredImage} alt="Featured Flats" style={{ width: '70%', maxWidth: '500px', height: 'auto' }} />
        </Box>
      </Box>
    </Box >
  );
};

export default FeaturedFlatListing;
