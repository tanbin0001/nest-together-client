'use client';

import { Typography, Grid, Box } from '@mui/material';
import { useState } from 'react';
import { useGetAllFlatsQuery } from '@/redux/api/flatsApi';
import Spinner from '../../Spinner/Spinner';
import SearchBar from '../components/SearchBar';
import FlatCard from '../components/FlatCards';
import { Flat } from '@/types/flats/flats.types';

export interface SearchParams {
  location?: string;
  minPrice?: string;
  maxPrice?: string;
  bedrooms?: string;
}

const AllFlats = () => {
  const [searchParams, setSearchParams] = useState<SearchParams>({});
  const { data, isLoading } = useGetAllFlatsQuery(searchParams);
  const allFlats = data?.data?.data;
  

  // Filter the flats based on search parameters
  const filteredFlats = allFlats?.filter((flat: Flat) => {
    if (searchParams.location && !flat.location.toLowerCase().includes(searchParams.location.toLowerCase())) {
      return false;
    }
    if (searchParams.minPrice && flat.rent < parseInt(searchParams.minPrice)) {
      return false;
    }
    if (searchParams.maxPrice && flat.rent > parseInt(searchParams.maxPrice)) {
      return false;
    }
    if (searchParams.bedrooms && flat.totalBedrooms !== parseInt(searchParams.bedrooms)) {
      return false;
    }
    return true;
  });

  const handleSearch = (params: any) => {
    setSearchParams(params);
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className='flex justify-center items-center'>
      <Box my={4} p={2}>
        <Typography variant="h4" gutterBottom align="center">
          Available Flats
        </Typography>
        <SearchBar onSearch={handleSearch} />
        {filteredFlats && filteredFlats.length > 0 ? (
          <Grid container spacing={2} justifyContent="center">
            {filteredFlats.map((flat: Flat) => (
              <Grid item key={flat.id} xs={12} sm={6} md={4}>
                <FlatCard flat={flat} />
              </Grid>
            ))}
          </Grid>
        ) : (
          <Typography variant="h6" align="center" color="textSecondary" marginTop={4}>
            No flats match your search criteria. Please try different search parameters.
          </Typography>
        )}
      </Box>
    </div>
  );
};

export default AllFlats;
