

'use client';

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
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useRegisterMutation } from "@/redux/api/authApi";
import Spinner from "@/components/UI/Loading/Spinner/Spinner";
import CustomForm from "@/components/Forms/CustomForm";
import CustomInput from "@/components/Forms/CustomInput";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Validation schema
const validationSchema = z.object({
  name: z.string().min(1, "Please enter your name!"),
  email: z.string().email("Please enter a valid email address!"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
  confirmPassword: z.string().min(6, "Confirm Password must be at least 6 characters long"),
}).refine(data => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

export const defaultValues: {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
} = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};


const RegisterPage = () => {
  const router = useRouter();
  const [register, { isLoading }] = useRegisterMutation();

  const handleRegister: SubmitHandler<FieldValues> = async (values) => {
    try {
      const { confirmPassword, ...rest } = values;
      const res: any = await register(rest);

      if (res?.data?.success) {
        toast.success('User created successfully!');
        router.push('/login');
      } else {
        toast.error('Failed to register');
      }
    } catch (err: any) {
      console.error(err.message);
    }
  };

  if (isLoading) {
    return <Spinner />;
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
              <Image
                src="/assets/logo.png"
                width={50}
                height={50}
                alt='logo'
              />
            </Box>
            <Box>
              <Typography variant="h6" fontWeight={600}>
                Patient Register
              </Typography>
            </Box>
          </Stack>

          <Box>
            <CustomForm
              onSubmit={handleRegister}
              resolver={zodResolver(validationSchema)}
              defaultValues={defaultValues}
            >
              <Grid container spacing={2} my={1}>
                <Grid item md={6}>
                  <CustomInput label="Name" fullWidth={true} name="name" />
                </Grid>
                <Grid item md={6}>
                  <CustomInput
                    label="Email"
                    type="email"
                    fullWidth={true}
                    name="email"
                  />
                </Grid>
                <Grid item md={6}>
                  <CustomInput
                    label="Password"
                    type="password"
                    fullWidth={true}
                    name="password"
                  />
                </Grid>
                <Grid item md={6}>
                  <CustomInput
                    label="Confirm Password"
                    type="password"
                    fullWidth={true}
                    name="confirmPassword"
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
            </CustomForm>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default RegisterPage;
