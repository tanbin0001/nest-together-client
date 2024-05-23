import { CircularProgress } from '@mui/material';
import React from 'react';

const Spinner = () => {
    return (
        <div className='min-h-screen flex justify-center items-center'>
              <CircularProgress color="success" />
        </div>
    );
};

export default Spinner;