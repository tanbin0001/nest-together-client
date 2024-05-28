 

'use client'

import React, { useState } from 'react';
import Spinner from '@/components/UI/Spinner/Spinner';
import { useDeleteFlatMutation, useGetAllFlatsQuery } from '@/redux/api/flatsApi';
import { Box, Button } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditModal from './component/editModal';   
import { toast } from 'sonner';
import { Flat } from '@/types/flats/flats.types';

const ManageFlats = () => {
    const { data, isLoading } = useGetAllFlatsQuery({});
    const [deleteFlat, {isLoading:deleteFlatLoading}] = useDeleteFlatMutation();
    const flats = data?.data?.data;

    const [openEditModal, setOpenEditModal] = useState(false);
    const [selectedFlat, setSelectedFlat] = useState(null);

    const handleOpenEditModal = (flat:any) => {
        setSelectedFlat(flat);
        setOpenEditModal(true);
    };

    const handleCloseEditModal = () => {
        setOpenEditModal(false);
        setSelectedFlat(null);
    };


    const handleDeleteFlat = async (flatId:string) => {
   
        try {
          const res = await deleteFlat(flatId).unwrap();
           
     if(res?.success === true) {
      toast.success(res?.message)
     }
        } catch (error) {
        
          toast.error('Failed to delete flat')
        }
      };
    const allFlats = flats?.map((req:any, index:number) => ({
        id: req.id,
        location: req?.location,
        name: req.user?.name,
        status: req.status,
        imageLink: req.imageLink,
        squareFeet: req.squareFeet,
        totalBedrooms: req.totalBedrooms,
        totalRooms: req.totalRooms,
        utilitiesDescription: req.utilitiesDescription,
        description: req.description,
        rent: req.rent,
        advanceAmount: req.advanceAmount,
        availability: req.availability,
    }));

    const columns: GridColDef[] = [
        { field: 'name', headerName: 'Owner Name', flex: 1 },
        { field: 'location', headerName: 'Location', flex: 1 },
        {
            field: "edit",
            headerName: "Edit",
            flex: 1,
            headerAlign: "center",
            align: "center",
            renderCell: ({ row }) => (
                <button
                    className='text-green-500 hover:text-green-600'
                    onClick={() => handleOpenEditModal(row)}
                >
                    <EditIcon />
                </button>
            ),
        },
        {
            field: "Delete",
            headerName: "Delete",
            flex: 1,
            headerAlign: "center",
            align: "center",
            renderCell: ({ row }) => (
    
                <button className='text-red-500 hover:text-red-600'  onClick={() => handleDeleteFlat(row.id)}>
                    <DeleteForeverIcon />
                </button>
            ),
        },
    ];

    if (isLoading || deleteFlatLoading) {
        return <Spinner />;
    }

    return (
        <div>
            <Box my={2}>
                <DataGrid hideFooterPagination rows={allFlats} columns={columns} />
            </Box>
            {openEditModal && (
                <EditModal
                    open={openEditModal}
                    onClose={handleCloseEditModal}
                    flat={selectedFlat}
                />
            )}
        </div>
    );
};

export default ManageFlats;
