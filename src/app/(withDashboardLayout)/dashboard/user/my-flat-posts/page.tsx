 
"use client";
 
import { useGetAllFlatsQuery } from "@/redux/api/flatsApi";
import FlatCard from "@/components/UI/HomePage/components/FlatCards";
import { getUserInfo } from "@/services/auth.services";
import { Grid } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, CardActions } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
const MyFlatPostsPage = () => {
 const {data,isLoading} = useGetAllFlatsQuery({});
 
 const user = getUserInfo();
 console.log(user.id);
 
 const flats:any = data?.data?.data
  
 
  const myPostedFlats = flats?.filter((flat:any) => flat?.postedBy === user.id)
 
 

  return (
    <Grid container spacing={2} justifyContent="center">
    {myPostedFlats?.map((flat: any) => (
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
      {flat.description}
    </Typography>
    <Typography variant="body2" color="text.secondary">
      Price: ${flat.rent} / month
    </Typography>
    <Typography variant="body2" color="text.secondary">
      Bedrooms: {flat.totalBedrooms}
    </Typography>
  </CardContent>
  </Box>

<CardActions sx={{
  display:'flex',justifyContent:'space-between'
}}>

<Button size="small" color="primary" href={`/dashboard/user/my-flat-posts/edit/${flat.id}`}>
   <EditIcon/>
  </Button>
  <Button size="small" color="error" href={`/flats/${flat.id}`}>
 <DeleteIcon/>
  </Button>
 
</CardActions>
</Card>
      </Grid>
    ))}
  </Grid>
  );
};

export default MyFlatPostsPage;

 