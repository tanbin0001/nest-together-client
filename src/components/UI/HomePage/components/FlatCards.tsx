
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, CardActions } from '@mui/material';
import Link from 'next/link';

function truncateDescription(description: string, maxLength: number) {
  if (description.length > maxLength) {
    return description.slice(0, maxLength) + '...';
  }
  return description;
}

export default function FlatCard({ flat }: { flat: any }) {
  const maxLength = 100;
  return (
    <Link href={`/flats/${flat.id}`}>
      <Card sx={{ maxWidth: 300, display: 'flex', flexDirection: 'column', height: '100%', borderRadius: 3 }} >
        <CardActionArea sx={{ flexGrow: 1 }}>
          <CardMedia
            component="img"

            image={flat?.imageLinks}
            alt="Flat image"
            sx={{ height: '200px', width: '300px', borderRadius: 3 }}
          />
          <CardContent sx={{ flexGrow: 1, }}>
            <Typography fontWeight='bold'  >
              {flat?.location}
            </Typography>
            {/* 
          <Typography variant="body2" color="text.secondary">
            <span className="font-extrabold">Description:</span> {truncateDescription(flat?.description, maxLength)}
          </Typography> */}
            <Typography variant="body2" color="text.secondary">
              <span className="font-extrabold">Rent:</span> ${flat?.rent} / month
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <span className="font-extrabold">Bedrooms:</span> {flat?.totalBedrooms}
            </Typography>
          </CardContent>
        </CardActionArea>
        {/* <CardActions>
        <Button size="small" sx={{ color: 'white' }} color="primary" href={`/flats/${flat?.id}`}>
          View Details
        </Button>
      </CardActions> */}
      </Card>
    </Link>
  );
}
