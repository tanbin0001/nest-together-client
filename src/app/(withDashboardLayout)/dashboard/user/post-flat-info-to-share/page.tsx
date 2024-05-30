

"use client";

import { Button, Grid } from "@mui/material";
import { FieldValues } from "react-hook-form";
import PHForm from "@/components/Forms/PHForm";
import PHInput from "@/components/Forms/PHInput";
import PHSelectField from "@/components/Forms/PHSelectField";
import { usePostAFlatMutation } from "@/redux/api/flatsApi";
import { toast } from "sonner";
import PHFileUploader from "@/components/Forms/PHFileUploader";
import Spinner from "@/components/UI/Spinner/Spinner";

const PostFlat = () => {
  const [postAFlat, { isLoading }] = usePostAFlatMutation();

  const defaultValues = {
    imageLinks: "",
    squareFeet: 0,
    totalBedrooms: 0,
    totalRooms: 0,
    utilitiesDescription: "",
    location: "",
    description: "",
    rent: 0,
    advanceAmount: 0,
    availability: true,
  };

  const handleFormSubmit = async (values: FieldValues) => {


    const formattedData = {
      ...values,
      squareFeet: Number(values.squareFeet),
      totalBedrooms: Number(values.totalBedrooms),
      totalRooms: Number(values.totalRooms),
      rent: Number(values.rent),
      advanceAmount: Number(values.advanceAmount),
      availability: values.availability === 'true'
    };

    try {
      const res = await postAFlat(formattedData).unwrap();
      console.log(res, 'from response');
      if (res?.success === true) {
        toast.success("Flat info shared successfully!!!");
      }
    } catch (err) {
      console.error(err);
      toast.error("Failed to share flat info");
    }
  };
  if (isLoading) {
    return <Spinner />
  }
  return (
    <div>
      <PHForm onSubmit={handleFormSubmit} defaultValues={defaultValues}>
        <Grid container spacing={2} sx={{ my: 5 }}>

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
          <Grid item xs={12} sm={12} md={4}>
            <PHFileUploader name="imageLinks" label="Upload images" />
          </Grid>
        </Grid>
        <Button type="submit">Create</Button>
      </PHForm>
    </div>
  );
};

export default PostFlat;

//! need to work on the flat details page where i've to show multiple images