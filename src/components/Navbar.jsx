import { AppBar, Icon, Toolbar, Typography, styled, Box, Avatar } from '@mui/material'
import React, { useState } from 'react';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { deepOrange, deepPurple } from '@mui/material/colors';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between"

});

const Search = styled("div")(({theme}) => ({
  background: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%"
}));

const Icons = styled(Box)(({theme}) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]:{
    display: "flex",
  }
}));

const UserBox = styled(Box)(({theme}) => ({
  display: "flex",
  gap: "10px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]:{
    display: "none",
  }
}));

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <AppBar position='sticky'>
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block"}}}>Navbar</Typography>
        <AcUnitIcon sx={{ display: { xs: "block", sm: "none"}}}/>
        <Search><InputBase placeholder='search...'/></Search>
        <Icons>
          <Badge badgeContent={4} color="error">
           <MailIcon color="white"/>
          </Badge>
          <Badge badgeContent={4} color="error">
           <NotificationsIcon color="white"/>
          </Badge>
          <Avatar onClick={e=>setOpen(true)} sx={{ width: 30, height: 30, bgcolor: deepOrange[500] }}>N</Avatar>
        </Icons>
        <UserBox variant="span">
          <Avatar onClick={e=>setOpen(true)} sx={{ width: 30, height: 30, bgcolor: deepOrange[500] }}>N</Avatar>
          <Typography>Mui</Typography>
        </UserBox>
      </StyledToolbar>
        <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e)=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
          
      
    </AppBar>
  )
}

export default Navbar
