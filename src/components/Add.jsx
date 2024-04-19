import React, { useState } from 'react';
import Tooltip from '@mui/material/Tooltip';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import { Avatar, Box, Stack, styled, TextField } from '@mui/material';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ImageIcon from '@mui/icons-material/Image';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const SytledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "20px"
});

const Add = () => {
  const [open, setOpen] = useState(false);
  return (
    <Box p={2}>
       <Tooltip onClick={(e) =>setOpen(true) } title="Delete"  sx={{position: "fixed",bottom: 20, left:{ xs: "calc(45%)", md:30}}}>
       <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
        </Tooltip>
        <SytledModal
          open={open}
          onClose={(e) =>setOpen(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          >
          <Box width={300} height={280} bgcolor={"background.default"} color={"text.primary"} p={3} borderRadius={5}>
            <Typography variant='h6' color="gray" textAlign="center">Create post</Typography>
            <UserBox>
              <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" 
              sx={{ width: 30, height: 30 }}/>
              <Typography variant='h6' fontWeight={500}>Limuz</Typography>
              
            </UserBox>
            <TextField
              sx={{ width: "100%" }}
                id="standard-multiline-static"
                multiline
                rows={3}
                placeholder="What's on your mind?"
                variant="standard"
              />
              <Stack direction="row" gap={1} mt={2} mb={3}>
                <EmojiEmotionsIcon color="primary"/>
                <ImageIcon color="secondary"/>
                <VideoCameraBackIcon color="success"/>
                <PersonAddIcon color="error"/>
                
              </Stack>
              <ButtonGroup fullWidth variant="contained" aria-label="Basic button group">
                <Button>Post</Button>
                <Button sx={{ width: "100px" }}><CalendarMonthIcon/></Button>
              </ButtonGroup>

              

          </Box>
          
        </SytledModal>
        
    </Box>
  )
}

export default Add
