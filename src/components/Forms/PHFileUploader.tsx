import * as React from "react";
import { useState } from "react";
import { SxProps, styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Controller, useFormContext } from "react-hook-form";
import { Input } from "@mui/material";
import axios from "axios";

type TProps = {
  name: string;
  label?: string;
  sx?: SxProps;
};

const image_hosting_token = "d90ae3f3d54ab3247df92c0620d25ddf";
const img_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`;

export default function PHFileUploader({ name, label, sx }: TProps) {
  const { control, setValue } = useFormContext();
  const [loading, setLoading] = useState(false);

  const handleFileChange = async (onChange: any, file: any) => {
    console.log(file, 'file selected');
    const formData = new FormData();
    formData.append("image", file);

    setLoading(true);
    try {
      const response = await axios.post(img_hosting_url, formData);
      const imageUrl = response.data.data.url;
      console.log(imageUrl, 'uploaded image URL');
      onChange(imageUrl);
      setValue(name, imageUrl);
    } catch (error) {
      console.error("Image upload failed: ", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value, ...field } }) => (
        <Button
          component="label"
          role={undefined}
          variant="contained"
          tabIndex={-1}
          startIcon={loading ? <CircularProgress size={24} /> : <CloudUploadIcon />}
          sx={{ ...sx }}
          disabled={loading}
        >
          {label || "Upload file"}
          <Input
            {...field}
            type="file"
            onChange={(e: any) => handleFileChange(onChange, e.target.files[0])}
            style={{ display: "none" }}
          />
        </Button>
      )}
    />
  );
}
