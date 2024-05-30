

import React from 'react';
import { Box, Button, Grid, Modal } from '@mui/material';
import CustomForm from '@/components/Forms/CustomForm';
import CustomInput from '@/components/Forms/CustomInput';
import CustomSelectField from '@/components/Forms/CustomSelectField';
import { FieldValues } from 'react-hook-form';
import { useUpdateFlatsMutation } from '@/redux/api/flatsApi';
import { toast } from 'sonner';
import Spinner from '@/components/UI/Spinner/Spinner';

const EditModal = ({ open, onClose, flat }: any) => {
    const [updateFlats, { isLoading }] = useUpdateFlatsMutation();

    const defaultValues = {
        imageLinks: flat.imageLinks || "",
        squareFeet: flat.squareFeet || 0,
        totalBedrooms: flat.totalBedrooms || 0,
        totalRooms: flat.totalRooms || 0,
        utilitiesDescription: flat.utilitiesDescription || "",
        location: flat.location || "",
        description: flat.description || "",
        rent: flat.rent || 0,
        advanceAmount: flat.advanceAmount || 0,
        availability: flat?.availability !== undefined ? flat.availability.toString() : "N/A"
    };

    const handleFormSubmit = async (values: FieldValues) => {
        console.log(values.availability);
        let availability;
        if (values.availability === 'true') {
            availability = true;
        } else if (values.availability === 'false') {
            availability = false;
        }
        console.log(availability);
        const formattedData = {
            ...values,
            squareFeet: Number(values.squareFeet),
            totalBedrooms: Number(values.totalBedrooms),
            totalRooms: Number(values.totalRooms),
            rent: Number(values.rent),
            advanceAmount: Number(values.advanceAmount),
            availability
        };

        const data = {
            flatId: flat.id,
            body: formattedData
        };

        try {
            const res: any = await updateFlats(data);

            if (res?.data.success) {
                toast.success(res?.data?.message);
                onClose();
            }
        } catch (err) {
            console.error(err);
        }

    };

    if (isLoading) {
        return <Spinner />;
    }

    return (
        <Modal open={open} onClose={onClose}>
            <Box sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '100%',
                bgcolor: 'background.paper',
                border: '2px solid #000',
                boxShadow: 24,
                p: 4
            }}>
                <CustomForm onSubmit={handleFormSubmit} defaultValues={defaultValues}>
                    <Grid container spacing={2} sx={{ my: 5 }}>
                        <Grid item xs={12} sm={12} md={4}>
                            <CustomInput
                                name="imageLinks"
                                label="Image Link"
                                fullWidth={true}
                                sx={{ mb: 2 }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={4}>
                            <CustomInput
                                name="squareFeet"
                                type="number"
                                label="Square Feet"
                                fullWidth={true}
                                sx={{ mb: 2 }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={4}>
                            <CustomInput
                                name="totalBedrooms"
                                type="number"
                                label="Total Bedrooms"
                                fullWidth={true}
                                sx={{ mb: 2 }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={4}>
                            <CustomInput
                                name="totalRooms"
                                type="number"
                                label="Total Rooms"
                                fullWidth={true}
                                sx={{ mb: 2 }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={4}>
                            <CustomInput
                                name="utilitiesDescription"
                                label="Utilities Description"
                                fullWidth={true}
                                sx={{ mb: 2 }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={4}>
                            <CustomInput
                                name="location"
                                label="Location"
                                fullWidth={true}
                                sx={{ mb: 2 }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={4}>
                            <CustomInput
                                name="description"
                                label="Description"
                                fullWidth={true}
                                sx={{ mb: 2 }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={4}>
                            <CustomInput
                                name="rent"
                                type="number"
                                label="Rent"
                                fullWidth={true}
                                sx={{ mb: 2 }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={4}>
                            <CustomInput
                                name="advanceAmount"
                                type="number"
                                label="Advance Amount"
                                fullWidth={true}
                                sx={{ mb: 2 }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={4}>
                            <CustomSelectField
                                name="availability"
                                label="Availability"
                                items={["true", "false"]}
                                sx={{ mb: 2 }}
                            />
                        </Grid>
                    </Grid>
                    <Button type="submit">Update</Button>
                </CustomForm>
            </Box>
        </Modal>
    );
};

export default EditModal;
