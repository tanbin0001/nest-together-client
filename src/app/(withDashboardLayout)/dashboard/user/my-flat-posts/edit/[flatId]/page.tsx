 


"use client"

import { Button, Grid } from "@mui/material";
import { Gender } from "@/types/common";
import { FieldValues } from "react-hook-form";
import PHForm from "@/components/Forms/PHForm";
import PHInput from "@/components/Forms/PHInput";
import PHSelectField from "@/components/Forms/PHSelectField";
import { useGetSingleFlatQuery, usePostAFlatMutation, useUpdateFlatsMutation } from "@/redux/api/flatsApi";
import { toast } from "sonner";
import Spinner from "@/components/UI/Spinner/Spinner";

const UpdateMyFlatPosts = ({params}:any) => {

    const [updateFlats] = useUpdateFlatsMutation()

    const flatId = params?.flatId;
 

 const {data,isLoading} = useGetSingleFlatQuery(flatId);

 const flatData = data?.data;
 


    const defaultValues = {
        imageLink: flatData?.imageLink,
        squareFeet: flatData?.squareFeet,
        totalBedrooms: flatData?.totalBedrooms,
        totalRooms: flatData?.totalRooms,
        utilitiesDescription: flatData?.utilitiesDescription,
        location: flatData?.location,
        description: flatData?.description,
        rent: flatData?.rent,
        advanceAmount: flatData?.advanceAmount,
        availability: flatData?.availability,
      };
      

    const handleFormSubmit = async (values: FieldValues) => {
        let availability;
        

        if(values.availability === 'true'){
            availability = true
        }else if(values.availability === 'false') {
            availability= false
        }

    
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
             flatId,
            body:formattedData
          }
    
  
        try {
          const res =  await updateFlats(data) ; 
 
          if (res?.data.success === true) {
            toast.success(res?.data?.message  );
            
          }
        } catch (err: any) {
          console.error(err);
     }
      };

      if (isLoading) {
        return  <Spinner/>;  
    }
    return (
        <div>
 <PHForm onSubmit={handleFormSubmit} defaultValues={flatData}>
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
        </div>
    );
};


export default UpdateMyFlatPosts;
 