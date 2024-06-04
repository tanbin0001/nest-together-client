

'use client';

import { Typography, Grid, Box, Skeleton } from '@mui/material';
import { useState } from 'react';
import { useGetAllFlatsQuery } from '@/redux/api/flatsApi';

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
  console.log(allFlats);

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

  return (
    <div className='flex justify-center items-center '>
      <Box my={4} p={2}>
        <Typography sx={{
          fontWeight: 'bold', my: 5, textAlign: 'center', color: 'gray', fontSize: {
            lg: 40,
            md: 30,
            sm: 30,
            xs: 30
          }
        }}>
          Available <span className='text-[#6db784]'>Flats</span>
        </Typography>
        <SearchBar onSearch={handleSearch} />
        {isLoading ? (
          <Grid container spacing={2} justifyContent="center">
            {Array.from(new Array(4)).map((_, index) => (
              <Grid item key={index}>
                <Skeleton variant="rectangular" width={300} height={200} />
                <Skeleton width="60%" />
                <Skeleton width="40%" />
              </Grid>
            ))}
          </Grid>
        ) : filteredFlats && filteredFlats.length > 0 ? (
          <Grid container spacing={2} justifyContent="center">
            {filteredFlats.map((flat: Flat) => (
              <Grid item key={flat.id}>
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

