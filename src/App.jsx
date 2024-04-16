import React from 'react'
import Rightbar from './components/Rightbar'
import Feed from './components/Feed'
import Sidebar from './components/Sidebar'
import { Box } from '@mui/material'
import Stack from '@mui/material/Stack';
import Navbar from './components/Navbar'


const App = () => {
  return (
    <Box>
      <Navbar/>
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar/>
        <Feed/>
        <Rightbar/>
      </Stack>

    </Box>
  )
}

export default App
