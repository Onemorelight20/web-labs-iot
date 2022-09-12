import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const FilmCard = ({imgSrc, imgAlt, cardTitle, cardText}) => {
    return <div>
             <Card sx={{ maxWidth: 345}}>
      <CardMedia
        component="img"
        alt={imgAlt}
        height="140"
        image={imgSrc}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {cardTitle}
        </Typography>
        <Typography variant="body2" color="text.secondary"  sx={{minHeight: 100}}>
          {cardText}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </div>;
}


export default FilmCard;