"use client"

import Spinner from '@/components/UI/Spinner/Spinner';
import { useGetAllBookingRequestsQuery } from '@/redux/api/bookingReqApi';
 import { getUserInfo } from '@/services/auth.services';
import { Box, IconButton, Typography } from '@mui/material';
 
import { DataGrid, GridColDef } from '@mui/x-data-grid';
const MyRequestsOnFlatPosts = () => {
    const {data,isLoading} = useGetAllBookingRequestsQuery({});

    
 const user = getUserInfo();
 
 const allBookingRequests:any = data?.data
 

  
 
  const myBookingRequests = allBookingRequests?.filter((req:any) => req?.userId === user.id)
 
     // Flatten data for DataGrid
     const flattenedRequests = myBookingRequests?.map((req:any, index:any) => ({
        id: req.id,
        sl: index + 1,
        location: req.flat?.location,
      name:req.user?.name,
      status: req.status,
    }));
 
    const getStatusColor = (status: string) => {
        switch (status) {
            case 'ACCEPTED':
                return 'green';
            case 'PENDING':
                return 'blue';
            case 'REJECTED':
                return 'red';
            default:
                return 'inherit';
        }
    };

   const columns: GridColDef[] = [
 
      { field: 'location', headerName: 'Location', flex: 1 },
      { 
        field: 'status', 
        headerName: 'Status', 
        flex: 1,
        renderCell: (params) => (
            <Box
                sx={{
                    color: getStatusColor(params.value),
                    fontWeight: 'bold'
                }}
            >
                {params.value}
            </Box>
        ),
    },
      { field: 'name', headerName: 'Flat Owner', flex: 1 },
     
   ];
    if (isLoading) {
        return  <Spinner/>;  
    }
    return (
        <Box>
            {flattenedRequests && flattenedRequests.length > 0 ? (
                <Box my={2}>
                    <DataGrid hideFooterPagination rows={flattenedRequests} columns={columns} />
                </Box>
            ) : (
                <Box my={2}>
                    <Typography variant="h6" align="center">
                        You haven&apos;t requested any flat to share.
                    </Typography>
                </Box>
            )}
        </Box>
    );
};

export default MyRequestsOnFlatPosts;