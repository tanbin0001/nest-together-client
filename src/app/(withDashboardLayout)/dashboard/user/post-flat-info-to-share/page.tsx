"use client"

import { Button, Grid } from "@mui/material";
import { Gender } from "@/types/common";
import { FieldValues } from "react-hook-form";
import PHForm from "@/components/Forms/PHForm";
import PHInput from "@/components/Forms/PHInput";
import PHSelectField from "@/components/Forms/PHSelectField";
import { usePostAFlatMutation } from "@/redux/api/flatsApi";
import { toast } from "sonner";

const PostFlat = () => {

const [postAFlat]= usePostAFlatMutation();


    const defaultValues = {
        imageLink: "",
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
        let availability;
        

        if(values.availability === true){
            availability = true
        }else {
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
    
        
        try {
          const res = await postAFlat(formattedData).unwrap();
          console.log(res);
          if (res?.id) {
            toast.success("Flat info shared  successfully!!!");
            
          }
        } catch (err: any) {
          console.error(err);
     }
      };
    return (
        <div>
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


        <Button type="submit">Create</Button>
      </PHForm>
        </div>
    );
};


export default PostFlat;
// export default PostFlat;
// import { Button, Grid } from "@mui/material";
// import { Gender } from "@/types/common";
// import { FieldValues } from "react-hook-form";
// import PHForm from "@/components/Forms/PHForm";
// import PHInput from "@/components/Forms/PHInput";
// import PHSelectField from "@/components/Forms/PHSelectField";
// import PHFullScreenModal from "@/components/Shared/PHModal/PHFullScreenModal";
 
// import { modifyPayload } from "@/utils/modifyPayload";
// import { toast } from "sonner";

// type TProps = {
//   open: boolean;
//   setOpen: React.Dispatch<React.SetStateAction<boolean>>;
// };

// const DoctorModal = ({ open, setOpen }: TProps) => {
// //   const [createDoctor] = useCreateDoctorMutation();
//   const handleFormSubmit = async (values: FieldValues) => {
//     // console.log(values);
//     values.doctor.experience = Number(values.doctor.experience);
//     values.doctor.apointmentFee = Number(values.doctor.apointmentFee);
//     const data = modifyPayload(values);
//     try {
//       const res = await createDoctor(data).unwrap();
//       console.log(res);
//       if (res?.id) {
//         toast.success("Doctor created successfully!!!");
//         setOpen(false);
//       }
//     } catch (err: any) {
//       console.error(err);
//  }
//   };

//   const defaultValues = {
//     doctor: {
//       email: "",
//       name: "",
//       contactNumber: "",
//       address: "",
//       registrationNumber: "",
//       gender: "",
//       experience: 0,
//       apointmentFee: 0,
//       qualification: "",
//       currentWorkingPlace: "",
//       designation: "",
//       profilePhoto: "",
//     },
//     password: "",
//   };

//   return (
//     <PHFullScreenModal open={open} setOpen={setOpen} title="Create New Doctor">
//       <PHForm onSubmit={handleFormSubmit} defaultValues={defaultValues}>
//         <Grid container spacing={2} sx={{ my: 5 }}>
//           <Grid item xs={12} sm={12} md={4}>
//             <PHInput
//               name="doctor.name"
//               label="Name"
//               fullWidth={true}
//               sx={{ mb: 2 }}
//             />
//           </Grid>
//           <Grid item xs={12} sm={12} md={4}>
//             <PHInput
//               name="doctor.email"
//               type="email"
//               label="Email"
//               fullWidth={true}
//               sx={{ mb: 2 }}
//             />
//           </Grid>

//           <Grid item xs={12} sm={12} md={4}>
//             <PHInput
//               name="password"
//               type="password"
//               label="Password"
//               fullWidth={true}
//               sx={{ mb: 2 }}
//             />
//           </Grid>

//           <Grid item xs={12} sm={12} md={4}>
//             <PHInput
//               name="doctor.contactNumber"
//               label="Contract Number"
//               fullWidth={true}
//               sx={{ mb: 2 }}
//             />
//           </Grid>
//           <Grid item xs={12} sm={12} md={4}>
//             <PHInput
//               name="doctor.address"
//               label="Address"
//               fullWidth={true}
//               sx={{ mb: 2 }}
//             />
//           </Grid>
//           <Grid item xs={12} sm={12} md={4}>
//             <PHInput
//               name="doctor.registrationNumber"
//               label="Registration Number"
//               fullWidth={true}
//               sx={{ mb: 2 }}
//             />
//           </Grid>
//           <Grid item xs={12} sm={12} md={4}>
//             <PHInput
//               name="doctor.experience"
//               type="number"
//               label="Experience"
//               fullWidth={true}
//               sx={{ mb: 2 }}
//             />
//           </Grid>
//           <Grid item xs={12} sm={12} md={4}>
//             <PHSelectField
//               items={Gender}
//               name="doctor.gender"
//               label="Gender"
//               sx={{ mb: 2 }}
//             />
//           </Grid>
//           <Grid item xs={12} sm={12} md={4}>
//             <PHInput
//               name="doctor.apointmentFee"
//               type="number"
//               label="ApointmentFee"
//               fullWidth={true}
//               sx={{ mb: 2 }}
//             />
//           </Grid>
//           <Grid item xs={12} sm={12} md={4}>
//             <PHInput
//               name="doctor.qualification"
//               label="Qualification"
//               fullWidth={true}
//               sx={{ mb: 2 }}
//             />
//           </Grid>

//           <Grid item xs={12} sm={12} md={4}>
//             <PHInput
//               name="doctor.currentWorkingPlace"
//               label="Current Working Place"
//               fullWidth={true}
//               sx={{ mb: 2 }}
//             />
//           </Grid>
//           <Grid item xs={12} sm={12} md={4}>
//             <PHInput
//               name="doctor.designation"
//               label="Designation"
//               fullWidth={true}
//               sx={{ mb: 2 }}
//             />
//           </Grid>
//         </Grid>

//         <Button type="submit">Create</Button>
//       </PHForm>
//     </PHFullScreenModal>
//   );
// };

// export default DoctorModal;
