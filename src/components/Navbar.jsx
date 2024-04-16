import { AppBar, Icon, Toolbar, Typography, styled, Box } from '@mui/material'
import React from 'react'
import AcUnitIcon from '@mui/icons-material/AcUnit';
import InputBase from '@mui/material/InputBase';


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
  background: "white",
}));

const Navbar = () => {
  return (
    <AppBar position='sticky'>
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block"}}}>Navbar</Typography>
        <AcUnitIcon sx={{ display: { xs: "block", sm: "none"}}}/>
        <Search><InputBase placeholder='search...'/></Search>
        <Icons>Icons</Icons>
      </StyledToolbar>
      
    </AppBar>
  )
}

export default Navbar
