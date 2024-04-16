import { AppBar, Icon, Toolbar, Typography, styled, Box, Avatar } from '@mui/material'
import React from 'react'
import AcUnitIcon from '@mui/icons-material/AcUnit';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { deepOrange, deepPurple } from '@mui/material/colors';

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
  display: "flex",
  gap: "20px",
  alignItems: "center",
}));

const Navbar = () => {
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
          <Avatar sx={{ width: 30, height: 30, bgcolor: deepOrange[500] }}>N</Avatar>

        </Icons>
      </StyledToolbar>
      
    </AppBar>
  )
}

export default Navbar
