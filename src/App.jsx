import React, { useState } from 'react'
import Rightbar from './components/Rightbar'
import Feed from './components/Feed'
import Sidebar from './components/Sidebar'
import { Box, createTheme } from '@mui/material'
import Stack from '@mui/material/Stack';
import Navbar from './components/Navbar'
import Add from './components/Add'
import { ThemeProvider } from '@emotion/react'


 
const App = () => {

  const [mode, setMode] = useState("light");

  const darkTheme =  createTheme({
    palette:{
      mode: mode
    }
  })
  return (
  <ThemeProvider theme={darkTheme}>
    <Box bgcolor={"background.default"} color={"text.primary"}>
      <Navbar/>
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar setMode={setMode} mode={mode}/>
        <Feed/>
        <Rightbar/>
      </Stack>
      <Add/>

    </Box>
  </ThemeProvider>
  )
}

export default App
