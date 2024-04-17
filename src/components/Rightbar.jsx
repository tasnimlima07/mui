import { Box, Typography } from '@mui/material'
import React from 'react'
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Granola from '../assets/Granola Yogurt Bark.jpg';
import Hemp from '../assets/Hemp Seed Banana Toast.jpg';
import Roll from '../assets/Roll-Ups with Eggs.jpg';
import sweet from '../assets/Sweet Potato Waffles.jpg';
import Toddler from '../assets/Strawberry French Toast.jpg';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';


const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block"}}}>
      
      <Box position="fixed" width={350} style={{ overflowY: 'auto', maxHeight: 'calc(100vh - 64px)' }}>
        <Typography variant="h6" fontWeight={100} mb={2} >Online Friends</Typography>
        <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
          <AvatarGroup total={24}>
            <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
            <Avatar alt="Travis Howard" src="https://mui.com/static/images/avatar/2.jpg" />
            <Avatar alt="Agnes Walker" src="https://mui.com/static/images/avatar/3.jpg" />
            <Avatar alt="Trevor Henderson" src="https://mui.com/static/images/avatar/5.jpg" />
            <Avatar alt="Travis " src="https://mui.com/static/images/avatar/6.jpg" />
            <Avatar alt="Agnes " src="https://mui.com/static/images/avatar/7.jpg" />
          </AvatarGroup>
        </Box>
  
          <Typography variant="h6"  fontWeight={100} mt={2} mb={2}>Latest Photos</Typography>
          <ImageList cols={3} rowHeight={100} gap={5}>
              <ImageListItem >
                <img
                  src="https://mui.com/static/images/image-list/breakfast.jpg"
                  alt="Travis "
                />
              </ImageListItem>
              <ImageListItem >
                <img
                  src={Granola}
                  alt="Travis "
                />
              </ImageListItem>
              <ImageListItem >
                <img
                  src={Hemp}
                  alt="Travis "
                />
              </ImageListItem>
              <ImageListItem >
                <img
                  src={sweet}
                  alt="Travis "
                />
              </ImageListItem>
              <ImageListItem >
                <img
                  src={Roll}
                  alt="Travis "
                />
              </ImageListItem>
              <ImageListItem >
                <img
                  src={Toddler}
                  alt="Travis "
                />
              </ImageListItem>            
          </ImageList>
          <Typography variant="h6"  fontWeight={100} mt={2} mb={2}>Latest Conversations</Typography>
          <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="https://mui.com/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="https://mui.com/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
      </Box>
      
      
    </Box>
  )
}


export default Rightbar
