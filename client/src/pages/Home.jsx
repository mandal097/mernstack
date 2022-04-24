import React from 'react'
import { Stack } from '@mui/material'
import Sidebar from '../components/Sidebar'
import Feed from '../components/Feed'
import Rightbar from '../components/Rightbar'
const Home = ({ setMode, mode }) => {
  return (
    <Stack
      direction='row'
      gap={1}
      sx={{
        marginTop: 8
      }}
      bgcolor={"Background.default"}
    >
      <Sidebar setMode={setMode} mode={mode} />
      <Feed />
      <Rightbar />
    </Stack>
  )
}

export default Home