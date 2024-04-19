import { AppBar, Toolbar, Typography, styled, Box, Avatar, useTheme } from '@mui/material';
import React, { useState } from 'react';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between"
});

const Search = styled("div")(({theme}) => ({
  background: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(({theme}) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  cursor: 'pointer',
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
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <AppBar position='sticky'>
      <StyledToolbar>
        <Typography variant="h6" sx={{ cursor: 'pointer', display: { xs: "none", sm: "block"}}}>Limuz</Typography>
        <AcUnitIcon sx={{ display: { xs: "block", sm: "none"}}}/>
        <Search>
          <InputBase placeholder='search...' sx={{ color: theme.palette.mode === 'dark' ? 'black' : 'black' }} />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <MailIcon color="white"/>
          </Badge>
          <Badge badgeContent={4} color="error">
            <NotificationsIcon color="white"/>
          </Badge>
          <Avatar src="https://mui.com/static/images/avatar/7.jpg" sx={{ width: 30, height: 30}} onClick={(e)=>setOpen(true)} >L</Avatar>
        </Icons>
        <UserBox variant="span">
          <Avatar sx={{ width: 30, height: 30}} onClick={(e)=>setOpen(true)}>L</Avatar>
          <Typography sx={{cursor: 'pointer'}}>Limuz</Typography>
        </UserBox>
      </StyledToolbar>
    </AppBar>
  );
}

export default Navbar;
