import { Typography, Grid, Box, Button } from '@mui/material';
import FlatCard from '../components/FlatCards';

const AllFlats = async () => {
  const res = await fetch('http://localhost:5000/api/flats');
  const { data: flats } = await res.json();

  return (
    <Box my={4}   p={2}>
    <Typography variant="h4" gutterBottom align="center">
      Available Flats
    </Typography>
    <Grid container spacing={2} justifyContent="center">
      {flats?.data?.map((flat: any) => (
        <Grid item key={flat.id} xs={12} sm={6} md={4}>
          <FlatCard flat={flat}/>
        </Grid>
      ))}
    </Grid>
  </Box>
  
  );
};

export default AllFlats;
