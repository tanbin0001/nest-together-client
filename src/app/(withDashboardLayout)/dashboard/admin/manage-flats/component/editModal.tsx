// import React from 'react';
// import { Box, Button, Grid, Modal } from '@mui/material';
// import PHForm from '@/components/Forms/PHForm';
// import PHInput from '@/components/Forms/PHInput';
// import PHSelectField from '@/components/Forms/PHSelectField';
// import { FieldValues } from 'react-hook-form';
// import { useUpdateFlatsMutation } from '@/redux/api/flatsApi';
// import { toast } from 'sonner';
// import Spinner from '@/components/UI/Spinner/Spinner';

// const EditModal = ({ open, onClose, flat }:any) => {
//     console.log(flat);
//     const [updateFlats,isLoading] = useUpdateFlatsMutation()




//     const defaultValues = {
//         imageLink: flat.imageLink || "",
//         squareFeet: flat.squareFeet || 0,
//         totalBedrooms: flat.totalBedrooms || 0,
//         totalRooms: flat.totalRooms || 0,
//         utilitiesDescription: flat.utilitiesDescription || "",
//         location: flat.location || "",
//         description: flat.description || "",
//         rent: flat.rent || 0,
//         advanceAmount: flat.advanceAmount || 0,
//         availability: flat.availability || true,
//     };

//     const handleFormSubmit = async (values: FieldValues) => {

//         let availability;


//         if(values.availability === 'true'){
//             availability = true
//         }else if(values.availability === 'false') {
//             availability= false
//         }


//         const formattedData = {
//             ...values,
//             squareFeet: Number(values.squareFeet),
//             totalBedrooms: Number(values.totalBedrooms),
//             totalRooms: Number(values.totalRooms),
//             rent: Number(values.rent),
//             advanceAmount: Number(values.advanceAmount),
//             availability
//           };

//           const data = {
//              flatId: flat.id,
//             body:formattedData
//           }


//         try {
//           const res =  await updateFlats(data) ; 
//           console.log(res,'from resssssssssssssssssssssssssssssss');

//           if (res?.data.success === true) {
//             toast.success(res?.data?.message  );

//           }
//         } catch (err: any) {
//           console.error(err);
//      }

//         onClose();
//     };
// if(isLoading){
//     return <Spinner/>
// }
//     return (
//         <div>
//             <Modal open={open} onClose={onClose}>
//                 <Box sx={{ 
//                     position: 'absolute', 
//                     top: '50%', 
//                     left: '50%', 
//                     transform: 'translate(-50%, -50%)', 
//                     width: '100%', 
//                     bgcolor: 'background.paper', 
//                     border: '2px solid #000', 
//                     boxShadow: 24, 
//                     p: 4 
//                 }}>
//                     <PHForm onSubmit={handleFormSubmit} defaultValues={defaultValues}>
//                         <Grid container spacing={2} sx={{ my: 5 }}>
//                             <Grid item xs={12} sm={12} md={4}>
//                                 <PHInput
//                                     name="imageLink"
//                                     label="Image Link"
//                                     fullWidth={true}
//                                     sx={{ mb: 2 }}
//                                 />
//                             </Grid>
//                             <Grid item xs={12} sm={12} md={4}>
//                                 <PHInput
//                                     name="squareFeet"
//                                     type="number"
//                                     label="Square Feet"
//                                     fullWidth={true}
//                                     sx={{ mb: 2 }}
//                                 />
//                             </Grid>
//                             <Grid item xs={12} sm={12} md={4}>
//                                 <PHInput
//                                     name="totalBedrooms"
//                                     type="number"
//                                     label="Total Bedrooms"
//                                     fullWidth={true}
//                                     sx={{ mb: 2 }}
//                                 />
//                             </Grid>
//                             <Grid item xs={12} sm={12} md={4}>
//                                 <PHInput
//                                     name="totalRooms"
//                                     type="number"
//                                     label="Total Rooms"
//                                     fullWidth={true}
//                                     sx={{ mb: 2 }}
//                                 />
//                             </Grid>
//                             <Grid item xs={12} sm={12} md={4}>
//                                 <PHInput
//                                     name="utilitiesDescription"
//                                     label="Utilities Description"
//                                     fullWidth={true}
//                                     sx={{ mb: 2 }}
//                                 />
//                             </Grid>
//                             <Grid item xs={12} sm={12} md={4}>
//                                 <PHInput
//                                     name="location"
//                                     label="Location"
//                                     fullWidth={true}
//                                     sx={{ mb: 2 }}
//                                 />
//                             </Grid>
//                             <Grid item xs={12} sm={12} md={4}>
//                                 <PHInput
//                                     name="description"
//                                     label="Description"
//                                     fullWidth={true}
//                                     sx={{ mb: 2 }}
//                                 />
//                             </Grid>
//                             <Grid item xs={12} sm={12} md={4}>
//                                 <PHInput
//                                     name="rent"
//                                     type="number"
//                                     label="Rent"
//                                     fullWidth={true}
//                                     sx={{ mb: 2 }}
//                                 />
//                             </Grid>
//                             <Grid item xs={12} sm={12} md={4}>
//                                 <PHInput
//                                     name="advanceAmount"
//                                     type="number"
//                                     label="Advance Amount"
//                                     fullWidth={true}
//                                     sx={{ mb: 2 }}
//                                 />
//                             </Grid>
//                             <Grid item xs={12} sm={12} md={4}>
//                                 <PHSelectField
//                                     name="availability"
//                                     label="Availability"
//                                     items={["true", "false"]}
//                                     sx={{ mb: 2 }}
//                                 />
//                             </Grid>
//                         </Grid>
//                         <Button type="submit">Update</Button>
//                     </PHForm>
//                 </Box>
//             </Modal>
//         </div>
//     );
// };

// export default EditModal;


import React from 'react';
import { Box, Button, Grid, Modal } from '@mui/material';
import PHForm from '@/components/Forms/PHForm';
import PHInput from '@/components/Forms/PHInput';
import PHSelectField from '@/components/Forms/PHSelectField';
import { FieldValues } from 'react-hook-form';
import { useUpdateFlatsMutation } from '@/redux/api/flatsApi';
import { toast } from 'sonner';
import Spinner from '@/components/UI/Spinner/Spinner';

const EditModal = ({ open, onClose, flat }:any) => {
    const [updateFlats, { isLoading }] = useUpdateFlatsMutation();

    const defaultValues = {
        imageLink: flat.imageLink || "",
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
            const res = await updateFlats(data);
 
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
                <PHForm onSubmit={handleFormSubmit} defaultValues={defaultValues}>
                    <Grid container spacing={2} sx={{ my: 5 }}>
                        <Grid item xs={12} sm={12} md={4}>
                            <PHInput
                                name="imageLink"
                                label="Image Link"
                                fullWidth={true}
                                sx={{ mb: 2 }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={4}>
                            <PHInput
                                name="squareFeet"
                                type="number"
                                label="Square Feet"
                                fullWidth={true}
                                sx={{ mb: 2 }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={4}>
                            <PHInput
                                name="totalBedrooms"
                                type="number"
                                label="Total Bedrooms"
                                fullWidth={true}
                                sx={{ mb: 2 }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={4}>
                            <PHInput
                                name="totalRooms"
                                type="number"
                                label="Total Rooms"
                                fullWidth={true}
                                sx={{ mb: 2 }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={4}>
                            <PHInput
                                name="utilitiesDescription"
                                label="Utilities Description"
                                fullWidth={true}
                                sx={{ mb: 2 }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={4}>
                            <PHInput
                                name="location"
                                label="Location"
                                fullWidth={true}
                                sx={{ mb: 2 }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={4}>
                            <PHInput
                                name="description"
                                label="Description"
                                fullWidth={true}
                                sx={{ mb: 2 }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={4}>
                            <PHInput
                                name="rent"
                                type="number"
                                label="Rent"
                                fullWidth={true}
                                sx={{ mb: 2 }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={4}>
                            <PHInput
                                name="advanceAmount"
                                type="number"
                                label="Advance Amount"
                                fullWidth={true}
                                sx={{ mb: 2 }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={4}>
                            <PHSelectField
                                name="availability"
                                label="Availability"
                                items={["true", "false"]}
                                sx={{ mb: 2 }}
                            />
                        </Grid>
                    </Grid>
                    <Button type="submit">Update</Button>
                </PHForm>
            </Box>
        </Modal>
    );
};

export default EditModal;
