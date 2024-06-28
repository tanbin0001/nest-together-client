
'use client';

import React, { useState } from 'react';
import { Box, TextField, Button, Grid, Slider, Typography, Menu, MenuItem, Fade, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

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
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
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
    handleClose();
  };

  const handlePriceRangeChange = (event: Event, newValue: number | number[], activeThumb: number) => {
    if (Array.isArray(newValue)) {
      setPriceRange(newValue as [number, number]);
    }
  };

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box ml={6} my={4} p={2} display="flex" justifyContent="start">
      <IconButton onClick={handleClick}>
        <MenuIcon />
      </IconButton>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <Box p={2}>
          <Grid container spacing={2} direction="column">
            <Grid item xs={12}>
              <TextField
                label="Location"
                variant="standard"
                fullWidth
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Bedrooms"
                variant="standard"
                fullWidth
                value={bedrooms}
                onChange={(e) => setBedrooms(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
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
            <Grid item xs={12} display="flex" alignItems="center">
              <Button variant="contained" color="primary" onClick={handleSearch} fullWidth>
                Search
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Menu>
    </Box>
  );
};

export default SearchBar;
