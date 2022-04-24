import React, { useState } from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'
import { createTheme, Box } from '@mui/material'
import { ThemeProvider } from '@emotion/react'
const App = () => {
  const [mode, setMode] = useState('dark')

  const darkTheme = createTheme({
    palette: {
      // mode: mode
    }
  })
  return (
    <ThemeProvider theme={darkTheme}>
      <Router bgcolor={"Background.default"}>
        <Box>
          <Navbar />
          <Routes>
            <Route path='/'>
              <Route index element={<Home setMode={setMode} mode={mode} />} />
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
              <Route path='/profile' element={<Profile />} />
            </Route>
          </Routes>
        </Box>
      </Router>
    </ThemeProvider>
  )
}

export default App