// components/SearchBar.tsx
'use client';

import React, { useState } from 'react';
import { Box, TextField, Button, Grid, Slider, Typography } from '@mui/material';
export interface SearchParams {
  location?: string;
  minPrice?: number;
  maxPrice?: number;
  bedrooms?: number;
}
interface SearchBarProps {
  onSearch: (params: SearchParams) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [location, setLocation] = useState('');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000]);
  const [bedrooms, setBedrooms] = useState('');

  const handleSearch = () => {
    onSearch({
      location,
      minPrice: priceRange[0],
      maxPrice: priceRange[1],
      bedrooms: bedrooms ? parseInt(bedrooms) : undefined,
    });
  };

  const handlePriceRangeChange = (event: Event, newValue: number | number[], activeThumb: number) => {
    if (Array.isArray(newValue)) {
      setPriceRange(newValue as [number, number]);
    }
  };

  return (
    <Box my={4} p={2} display="flex" justifyContent="center">
      <Grid container spacing={2} maxWidth="md">
        <Grid item xs={12} sm={6} md={3}>
          <TextField
            label="Location"
            variant="outlined"
            fullWidth
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <TextField
            label="Bedrooms"
            variant="outlined"
            fullWidth
            value={bedrooms}
            onChange={(e) => setBedrooms(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography id="range-slider" gutterBottom>
            Price Range
          </Typography>
          <Slider
            value={priceRange}
            onChange={handlePriceRangeChange}
            valueLabelDisplay="auto"
            aria-labelledby="range-slider"
            min={0}
            max={10000}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3} display="flex" alignItems="center">
          <Button variant="contained" color="primary" onClick={handleSearch} fullWidth>
            Search
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SearchBar;
