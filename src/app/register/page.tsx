"use client";
import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
 
import Link from "next/link";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { modifyPayload } from "@/utils/modifyPayload";
 
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { userLogin } from "@/services/actions/userLogin";
import { storeUserInfo } from "@/services/auth.services";
import PHForm from "@/components/Forms/PHForm";
import PHInput from "@/components/Forms/PHInput";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRegisterMutation } from "@/redux/api/authApi";
import Spinner from "@/components/UI/Spinner/Spinner";
 
export const validationSchema = z.object({
  password: z.string(),
  name: z.string().min(1, "Please enter your name!"),
  email: z.string().email("Please enter a valid email address!"),
 
});

export const defaultValues = {
  password: "",
    name: "",
    email: "",
 
 
};

const RegisterPage = () => {
  const router = useRouter();
const [register,{isLoading}] = useRegisterMutation();
  const handleRegister = async (values: FieldValues) => {
    console.log(values,'valuessssssssssssssssssssssssssssssssssssssssssssssssssssss');
 
    try {
      const res:any= await register(values);
      console.log(res,'dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd');
      
      if (res?.data?.success) {
   
        toast.success('User created successfully!')
        router.push('/login')
     
      } else {
        toast.error('Failed to register')
      }
    } catch (err: any) {
      console.error(err.message);
    }
  };

  if(isLoading){
    return <Spinner/>
  }
  return (
    <Container>
      <Stack
        sx={{
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            maxWidth: 600,
            width: "100%",
            boxShadow: 1,
            borderRadius: 1,
            p: 4,
            textAlign: "center",
          }}
        >
          <Stack
            sx={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box>
              {/* <Image src={assets.svgs.logo} width={50} height={50} alt="logo" /> */}
            </Box>
            <Box>
              <Typography variant="h6" fontWeight={600}>
                Patient Register
              </Typography>
            </Box>
          </Stack>

          <Box>
            <PHForm
              onSubmit={handleRegister}
              resolver={zodResolver(validationSchema)}
              defaultValues={defaultValues}
            >
              <Grid container spacing={2} my={1}>
                <Grid item md={12}>
                  <PHInput label="Name" fullWidth={true} name="name" />
                </Grid>
                <Grid item md={6}>
                  <PHInput
                    label="Email"
                    type="email"
                    fullWidth={true}
                    name="email"
                  />
                </Grid>
                <Grid item md={6}>
                  <PHInput
                    label="Password"
                    type="password"
                    fullWidth={true}
                    name="password"
                  />
                </Grid>
                 
              </Grid>
              <Button
                sx={{
                  margin: "10px 0px",
                }}
                fullWidth={true}
                type="submit"
              >
                Register
              </Button>
              <Typography component="p" fontWeight={300}>
                Do you already have an account? <Link href="/login">Login</Link>
              </Typography>
            </PHForm>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default RegisterPage;
