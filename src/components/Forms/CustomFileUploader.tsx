


import * as React from "react";
import { useState } from "react";
import { SxProps } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Controller, useFormContext } from "react-hook-form";
import axios from "axios";

type TProps = {
  name: string;
  label?: string;
  sx?: SxProps;
};

const image_hosting_token = "d90ae3f3d54ab3247df92c0620d25ddf";
const img_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`;

export default function CustomFileUploader({ name, label, sx }: TProps) {
  const { control, setValue } = useFormContext();
  const [loading, setLoading] = useState(false);
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);



  const handleFileChange = async (onChange: any, files: FileList) => {
    setLoading(true);
    const uploadedUrls: string[] = [];

    for (const file of Array.from(files)) {
      const formData = new FormData();
      formData.append("image", file);

      try {
        const response = await axios.post(img_hosting_url, formData);
        const imageUrl = response.data.data.url;
        uploadedUrls.push(imageUrl);
      } catch (error) {
        console.error("Image upload failed: ", error);
      }
    }

    setLoading(false);
    setUploadedImages(uploadedUrls);
    onChange(uploadedUrls);
    setValue(name, uploadedUrls);
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
          <input
            {...field}
            type="file"
            multiple
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleFileChange(onChange, e.target.files!)}
            style={{ display: "none" }}
          />
        </Button>
      )}
    />
  );
}
