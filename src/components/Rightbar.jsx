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
import Toddler from '../assets/Strawberry French Toast.jpg'


const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block"}}}>
      <Box position= "fixed" width={300}>
        <Typography variant="h6"  fontWeight={100} mb={2} >Online Friends</Typography>
          <AvatarGroup total={24}>
            <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
            <Avatar alt="Travis Howard" src="https://mui.com/static/images/avatar/2.jpg" />
            <Avatar alt="Agnes Walker" src="https://mui.com/static/images/avatar/3.jpg" />
            <Avatar alt="Trevor Henderson" src="https://mui.com/static/images/avatar/5.jpg" />
            <Avatar alt="Travis " src="https://mui.com/static/images/avatar/6.jpg" />
            <Avatar alt="Agnes " src="https://mui.com/static/images/avatar/7.jpg" />
          </AvatarGroup>
  
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
      </Box>
    </Box>
  )
}


export default Rightbar
