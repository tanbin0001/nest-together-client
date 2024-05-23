import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, CardActions } from '@mui/material';

export default function FlatCard({flat}:{flat:any}) {
 
  return (
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
    
      <CardActions>
        <Button size="small" color="primary" href={`/flats/${flat.id}`}>
          View Details
        </Button>
      </CardActions>
    </Card>
  );
}
