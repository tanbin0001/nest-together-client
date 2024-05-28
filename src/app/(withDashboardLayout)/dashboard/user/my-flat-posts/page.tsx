 
"use client";
 
import { useDeleteFlatMutation, useGetAllFlatsQuery } from "@/redux/api/flatsApi";
 
import { getUserInfo } from "@/services/auth.services";
import { Grid } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, CardActions } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { toast } from "sonner";
import Spinner from "@/components/UI/Spinner/Spinner";
import { Flat } from "@/types/flats/flats.types";
const MyFlatPostsPage = () => {
 const {data,isLoading} = useGetAllFlatsQuery({});
 const [deleteFlat] = useDeleteFlatMutation();
 
 const user = getUserInfo();
  
 const flats:any = data?.data?.data
  
 
  const myPostedFlats = flats?.filter((flat:Flat) => flat?.postedBy === user.id)
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
if(isLoading){
    return <Spinner/>
}
  return (
    <Box>
        {myPostedFlats && myPostedFlats.length > 0 ? (
            <Grid container spacing={2} justifyContent="center">
                {myPostedFlats.map((flat: Flat) => (
                    <Grid item key={flat.id} xs={12} sm={6} md={4}>
                        <Card sx={{ maxWidth: 345, height: '100%', display: 'flex', flexDirection: 'column' }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={flat.imageLink}
                                    alt="Flat image"
                                />
                            </CardActionArea>
                            <Box sx={{ flexGrow: 1 }}>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                  {flat.location}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                  <span className="font-extrabold">Description:</span> {flat.description}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                    <span className="font-extrabold">Price:</span>${flat.rent} / month
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                     <span className="font-extrabold">Bedrooms:</span> {flat.totalBedrooms}
                                    </Typography>
                                </CardContent>
                            </Box>
                            <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Button size="small" color="primary" href={`/dashboard/user/my-flat-posts/edit/${flat.id}`}>
                                    <EditIcon />
                                </Button>
                                <Button size="small" color="error" onClick={() => handleDeleteFlat(flat.id)}>
                                    <DeleteIcon />
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        ) : (
            <Typography variant="h6" align="center" sx={{ mt: 4 }}>
                You haven&apos;t posted any flat to share.
            </Typography>
        )}
    </Box>
);
};

export default MyFlatPostsPage;

 