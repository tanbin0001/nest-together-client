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
// "use client";

// import { useState } from 'react';
// import { Typography, Grid, Box, Button, TextField, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
// import FlatCard from '../components/FlatCards';
 

// const AllFlats = () => {
//   const [flats, setFlats] = useState([]);
//   const [location, setLocation] = useState('');
//   const [priceRange, setPriceRange] = useState('');
//   const [bedrooms, setBedrooms] = useState('');
//   const [searchTerm, setSearchTerm] = useState('');

//   const fetchFlats = async () => {
//     const queryParams = new URLSearchParams({
//       searchTerm,
//       location,
//       priceRange,
//       bedrooms,
//     }).toString();
//     const res = await fetch(`http://localhost:5000/api/flats?${queryParams}`);
//     const { data: flats } = await res.json();
//     setFlats(flats);
//     console.log(flats);
//   };

//   const handleSearch = () => {
//     fetchFlats();
//   };

//   return (
//     <Box my={4} p={2}>
//       <Typography variant="h4" gutterBottom align="center">
//         Available Flats
//       </Typography>
//       <Box mb={4} display="flex" justifyContent="center" alignItems="center">
//         <TextField
//           label="Location"
//           value={location}
//           onChange={(e) => setLocation(e.target.value)}
//           margin="normal"
//         />
//         <TextField
//           label="Price Range"
//           value={priceRange}
//           onChange={(e) => setPriceRange(e.target.value)}
//           margin="normal"
//         />
//         <FormControl margin="normal">
//           <InputLabel>Bedrooms</InputLabel>
//           <Select
//             value={bedrooms}
//             onChange={(e) => setBedrooms(e.target.value)}
//           >
//             <MenuItem value={1}>1</MenuItem>
//             <MenuItem value={2}>2</MenuItem>
//             <MenuItem value={3}>3</MenuItem>
//             <MenuItem value={4}>4+</MenuItem>
//           </Select>
//         </FormControl>
//         <Button
  
//           onClick={handleSearch}
//           margin="normal"
//         >
//           Search
//         </Button>
//       </Box>
//       <Grid container spacing={2} justifyContent="center">
//         {flats?.data?.map((flat) => (
//           <Grid item key={flat.id} xs={12} sm={6} md={4}>
//             <FlatCard flat={flat} />
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// };

// export default AllFlats;
