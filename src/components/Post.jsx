import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import CircularProgress from '@mui/material/CircularProgress';
import Data from './Data.json';
import Button from '@mui/material/Button';

const Post = () => {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    // Simulate an async operation
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulating a 2-second loading process
  };

  return (
    <Box flex={4} p={2}>
      {Data.cards.map((card, index) => (
        <Card key={index} sx={{ margin: 5 }}>
          <CardHeader
            avatar={
              <Avatar src={card.avatar} alt="Avatar" aria-label="recipe" />
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={card.title}
            subheader={card.subheader}
          />
          <CardMedia
            component="img"
            height="20%"
            image={card.image}
            alt="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {card.content}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{ color: "red"}} />} />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </CardActions>
        </Card>
      ))}
      <Box textAlign="center" mt={3}>
        <Button
          variant="contained"
          color="primary"
          disabled={loading}
          onClick={handleClick}
          // Add sx prop to style the button and spinner position
          sx={{ position: 'relative' }}
        >
          {loading ? <CircularProgress size={24} color="inherit" sx={{ position: 'absolute', top: '50%', left: '50%', marginTop: '-12px', marginLeft: '-12px' }} /> : 'Load More'}
        </Button>
      </Box>
    </Box>
  );
}

export default Post;
